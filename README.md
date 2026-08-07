# amirkiadi.com

Personal portfolio. React, no UI framework — every component, transition and
layout primitive is hand-written.

**Live:** https://amirr-k.github.io/portfolio

## Running it

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production bundle in build/
```

## Structure

```
src/
  styles/base.css     design tokens, reset, grid backdrop, reveal utility
  styles/buttons.css  shared control surfaces
  data/site.js        all copy and content — edit here, not in components
  hooks/              scroll reveal + scroll spy
  components/         one .jsx + .css pair per section
  config.js           contact form delivery
```

Content lives in `src/data/site.js`. Adding a project or a photo means editing
that file, not a component.

## Design

Monochrome by rule. The only colour on the site comes from photographs, and
only once you interact with them — gallery images sit in grayscale and
saturate on hover. Type is SF Pro on Apple hardware and Inter everywhere else,
with a system monospace for labels and metadata.

## Contact form

GitHub Pages is static, so the form posts straight from the visitor's browser
to [Web3Forms](https://web3forms.com), which sends the mail. Nothing runs on
this host.

The access key lives in `src/config.js`. It is public by design — it ships in
the JS bundle either way — and only authorises "send Amir an email". The
hidden honeypot field is what stops bots.

To swap it without editing the file, set `REACT_APP_WEB3FORMS_KEY` in
`.env.local` locally, or as a repository secret named `WEB3FORMS_KEY`
(Settings → Secrets and variables → Actions); either overrides the default.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
app and publishes `build/` to Pages.

This requires **Settings → Pages → Source: GitHub Actions**. The older
`gh-pages` branch is a stale artifact from a previous deploy method and is no
longer used.
