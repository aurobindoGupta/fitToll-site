#!/usr/bin/env python3
"""Regenerate assets/og-card.png (1200x630 social share card).

Mirrors the landing-page gate section so a shared link looks like the site.
Palette and type come from _sass/minima/custom-styles.scss :root.

Fonts are variable TTFs from google/fonts (not vendored -- fetched on run):
  ofl/bigshouldersdisplay/BigShouldersDisplay[wght].ttf
  ofl/geist/Geist[wght].ttf

Usage:  python3 scripts/make-og-card.py [--fonts DIR]
"""

import argparse
import pathlib
import sys
import urllib.request

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAD = 72

SURFACE_0 = (12, 12, 13)
TEXT_STRONG = (245, 245, 247)
TEXT_MUTED = (138, 138, 147)
ACCENT = (34, 211, 238)
TOLL = (244, 165, 42)
GRID = (255, 255, 255, 10)
BORDER = (255, 255, 255, 22)

FONT_URLS = {
    "BigShoulders.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/bigshouldersdisplay/BigShouldersDisplay%5Bwght%5D.ttf",
    "Geist.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/geist/Geist%5Bwght%5D.ttf",
}


def load_font(fonts_dir, name, size, weight):
    path = fonts_dir / name
    if not path.exists():
        fonts_dir.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(FONT_URLS[name], path)
    font = ImageFont.truetype(str(path), size)
    font.set_variation_by_name(weight)
    return font


def draw_tracked(draw, xy, text, font, fill, tracking=0):
    """PIL has no letter-spacing; step glyph by glyph."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


def build(fonts_dir, icon_path, out_path):
    img = Image.new("RGB", (W, H), SURFACE_0)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)

    for x in range(0, W, 40):
        od.line([(x, 0), (x, H)], fill=GRID, width=1)
    for y in range(0, H, 40):
        od.line([(0, y), (W, y)], fill=GRID, width=1)

    card = (760, 150, 1128, 480)
    od.rounded_rectangle(card, radius=8, fill=(19, 19, 22, 255), outline=BORDER, width=1)

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(img)

    f_eyebrow = load_font(fonts_dir, "Geist.ttf", 21, "SemiBold")
    f_head = load_font(fonts_dir, "BigShoulders.ttf", 132, "ExtraBold")
    f_sub = load_font(fonts_dir, "Geist.ttf", 27, "Regular")
    f_brand = load_font(fonts_dir, "Geist.ttf", 25, "SemiBold")
    f_url = load_font(fonts_dir, "Geist.ttf", 25, "Regular")
    f_label = load_font(fonts_dir, "Geist.ttf", 20, "Medium")
    f_count = load_font(fonts_dir, "BigShoulders.ttf", 92, "Bold")
    f_state = load_font(fonts_dir, "Geist.ttf", 21, "SemiBold")

    # Vertical rhythm is hand-tuned against the 630px canvas: the footer row
    # starts at H-PAD-52 (506), so the second subline must terminate above it.
    draw_tracked(d, (PAD, 88), "APP BLOCKED", f_eyebrow, TOLL, tracking=2.4)

    d.text((PAD - 4, 124), "Pay the toll", font=f_head, fill=TEXT_STRONG)
    d.text((PAD - 4, 228), "to scroll.", font=f_head, fill=TEXT_STRONG)

    # 22px clear of the headline's baseline -- any tighter and the rule reads
    # as an underline of "to" rather than a divider.
    d.line([(PAD, 386), (PAD + 92, 386)], fill=TOLL, width=3)

    d.text((PAD, 410), "Camera-verified push-ups or squats to open", font=f_sub, fill=TEXT_MUTED)
    d.text((PAD, 446), "the apps you doomscroll.", font=f_sub, fill=TEXT_MUTED)

    icon = Image.open(icon_path).convert("RGBA").resize((52, 52), Image.LANCZOS)
    img.paste(icon, (PAD, H - PAD - 52), icon)
    x = PAD + 68
    d.text((x, H - PAD - 42), "FitToll", font=f_brand, fill=TEXT_STRONG)
    x += d.textlength("FitToll", font=f_brand) + 14
    d.text((x, H - PAD - 42), "·", font=f_url, fill=TEXT_MUTED)
    d.text((x + 16, H - PAD - 42), "fittoll.com", font=f_url, fill=TEXT_MUTED)

    cx, cy = card[0] + 40, card[1] + 40
    d.text((cx, cy), "Push-ups", font=f_label, fill=TEXT_MUTED)
    d.text((cx, cy + 34), "10", font=f_count, fill=TEXT_STRONG)
    n_w = d.textlength("10", font=f_count)
    d.text((cx + n_w + 8, cy + 78), "/10", font=f_sub, fill=TEXT_MUTED)

    bar_y, bar_w = cy + 168, card[2] - card[0] - 80
    d.rounded_rectangle([cx, bar_y, cx + bar_w, bar_y + 8], radius=4, fill=(37, 37, 42))
    d.rounded_rectangle([cx, bar_y, cx + bar_w, bar_y + 8], radius=4, fill=ACCENT)
    d.text((cx, bar_y + 30), "Unlocked", font=f_state, fill=ACCENT)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    return out_path


if __name__ == "__main__":
    root = pathlib.Path(__file__).resolve().parent.parent
    ap = argparse.ArgumentParser()
    ap.add_argument("--fonts", default=str(root / ".fonts"))
    args = ap.parse_args()

    out = build(
        pathlib.Path(args.fonts),
        root / "assets" / "favicon-512.png",
        root / "assets" / "og-card.png",
    )
    print(f"wrote {out} ({out.stat().st_size:,} bytes)", file=sys.stderr)
