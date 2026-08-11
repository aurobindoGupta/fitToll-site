#!/usr/bin/env python3
"""Regenerate the small brand marks from assets/favicon-512.png.

The favicon-* files exist to satisfy <link rel="icon"> at their declared
sizes. They are the wrong source for <img> tags: the header, footer and hero
marks render at 28, 22 and 76 CSS px, so shipping a 512px PNG to paint 76px
wastes a quarter-megabyte on the critical path.

Each output is 2x its CSS size for retina. Regenerate after any icon change:

    python3 scripts/make-marks.py
"""

import pathlib
import sys

from PIL import Image

# (output name, pixel size, CSS size it backs)
MARKS = [
    ("mark-152.png", 152, "76px hero gate mark"),
    ("mark-56.png", 56, "28px header brand mark"),
    ("mark-44.png", 44, "22px footer mark"),
]

if __name__ == "__main__":
    assets = pathlib.Path(__file__).resolve().parent.parent / "assets"
    src = Image.open(assets / "favicon-512.png").convert("RGBA")

    for name, size, note in MARKS:
        out = assets / name
        src.resize((size, size), Image.LANCZOS).save(out, "PNG", optimize=True)
        print(f"{name:>14}  {size}x{size}  {out.stat().st_size:>7,} B   ({note})", file=sys.stderr)
