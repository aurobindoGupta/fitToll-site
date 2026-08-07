# FitToll — website

The source for **[fittoll.com](https://fittoll.com)**.

FitToll blocks the apps you keep losing time to. To open one, you complete camera-verified push-ups or squats — the pose detection runs entirely on your device, so no video is recorded and nothing is uploaded. There is no skip button.

> Pay the toll to scroll.

## Links

| | |
|---|---|
| Website | **https://fittoll.com** |
| Privacy Policy | https://fittoll.com/privacy-policy/ |
| Terms of Use | https://fittoll.com/terms-of-use/ |
| iOS | [Download on the App Store](https://apps.apple.com/us/app/fittoll/id6761677416) |
| Android | Closed testing — [join the testing group](https://groups.google.com/g/fittoll_testing) |
| Support | [support@fittoll.com](mailto:support@fittoll.com) |

The privacy policy and terms hosted here are the versions linked from the app store listings, so they are the authoritative copies.

## What's in this repo

A small [Jekyll](https://jekyllrb.com/) site built on the `minima` theme with a custom dark design layer.

```
index.md              Landing page — how the gate works, why it can't be
                      cheated, where to get it, pricing, support
privacy-policy.md     Privacy Policy
terms-of-use.md       Terms of Use

_layouts/             home · page · default
_includes/            head · header · footer
_sass/minima/         custom-styles.scss — the dark theme layer
assets/
  main.scss           Entry stylesheet
  scripts/            Table-of-contents sidebar, landing-page hero, footer
  favicon-*.png       Icons
_config.yml           Site config
CNAME                 fittoll.com
```

## How it deploys

GitHub Pages builds this repo with its built-in Jekyll pipeline — there is no Actions workflow and no build step to run yourself.

- **Source:** the `main` branch, repository root.
- **Push to `main` publishes.** Allow a minute or two for the Pages build.
- **Custom domain:** `fittoll.com`, set by the `CNAME` file. HTTPS is enforced, and the certificate covers both `fittoll.com` and `www.fittoll.com`.

### Local preview

No `Gemfile` is committed, so there is nothing to `bundle install` as things stand. To preview locally, add one pinning the `github-pages` gem — which tracks the exact versions Pages builds with — then run `bundle exec jekyll serve`.

Because the site is three content pages, most changes are just as easy to verify on the deployed preview after a push.

### Adding a page

Create a Markdown file at the repository root with front matter setting `layout` and `title`. To list it in the header navigation, add the filename to `header_pages` in `_config.yml`.

`_config.yml` also carries an `exclude` list for files that should never be published — this README is on it, so it stays out of the built site.

---

© FitToll. The contents of this repository are not offered under an open-source license.
