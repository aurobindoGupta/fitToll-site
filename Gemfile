source "https://rubygems.org"

# Pinned to the github-pages release GitHub Pages itself builds with, so a local
# preview matches production. Current versions: https://pages.github.com/versions/
# Dependabot bumps this pin monthly (.github/dependabot.yml).
#
# Needs Ruby >= 3.0 — github-pages 232 pulls nokogiri >= 1.16.2, which requires it.
# macOS system Ruby (2.6) cannot install this; use rbenv/asdf or Homebrew ruby.
#
# Gemfile.lock is deliberately not tracked (see .gitignore) — Pages resolves
# server-side, and a lock generated on an older Ruby silently pins BELOW
# production (2.6 resolves github-pages 231 / jekyll 3.9.5, not 232 / 3.10.0).
gem "github-pages", "~> 232", group: :jekyll_plugins
