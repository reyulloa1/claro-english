# Project Onboarding

## What This Project Is

This repository is the foundation for Claro English, an AI-powered English learning podcast and media brand for Spanish speakers starting life in the U.S.

The project currently includes:

- Brand strategy and messaging
- Episode 1 production system
- Static website foundation
- Content model for episodes and marketing copy
- GitHub Pages deployment workflow
- Brand kit guidance for consistent visuals across platforms

## Core Brand Direction

- Brand name: Claro English
- Primary tagline: Real English for Real Life in the U.S.
- Supporting taglines:
  - Your First English for Life in the U.S.
  - Clear English for Your New Life in America
- Main hosts:
  - Emma
  - Daniel
- Audience:
  - Spanish speakers beginning life in the U.S.
- Starting level:
  - Beginner

## Current Build Status

### Completed

- Brand strategy and positioning
- Launch messaging
- Brand package
- Episode 1 script
- Episode 1 production script
- Episode 1 shot list and storyboard
- Episode 1 voice checklist
- Episode 1 visual asset checklist
- Episode 1 supporting assets
- Episode production workflow checklist
- Static site foundation in `/site`
- Episode 1 content in the site data model
- Brand kit v1
- GitHub Pages deploy workflow

### Not yet built

- Real brand assets such as logo and host visuals
- Episode 2 content
- Richer episode library
- Transcript pages
- App experience
- Backend or CMS
- Subscription system

## Most Important Files

### Website foundation

- `site/index.html`
- `site/episode.html`
- `site/app.js`
- `site/styles.css`
- `site/data/site-content.js`

### Brand and strategy

- `docs/brand-strategy.md`
- `docs/brand-package-v1.md`
- `docs/launch-messaging-v1.md`
- `docs/brand-kit-v1.md`

### Episode 1 production

- `scripts/episode-01-airport.md`
- `scripts/episode-01-airport-production.md`
- `docs/episode-01-shotlist-storyboard.md`
- `docs/episode-01-voice-checklist.md`
- `docs/episode-01-visual-asset-checklist.md`
- `docs/episode-01-supporting-assets.md`
- `docs/episode-production-workflow-checklist.md`

### Deployment

- `.github/workflows/deploy-pages.yml`
- `docs/github-pages-deployment.md`

### System planning

- `docs/content-system-foundation.md`
- `docs/project-brief.md`
- `docs/system-architecture.md`
- `docs/execution-roadmap.md`

## How The Website Works Right Now

The site is a lightweight static website.

- `index.html` is the homepage shell
- `episode.html` is the episode page shell
- `app.js` renders content into those shells
- `styles.css` defines the brand visual system
- `site-content.js` stores shared site content and episode data

Episode pages are currently rendered by URL query string:

- `episode.html?slug=episode-01-airport`

## How To Preview Locally

From the project root:

```bash
xdg-open site/index.html
```

Or open the file manually in a browser.

## How To Deploy

GitHub Pages is already configured through GitHub Actions.

Main workflow:

- `.github/workflows/deploy-pages.yml`

Deployment guide:

- `docs/github-pages-deployment.md`

Publishing model:

- Push to `main`
- GitHub Actions deploys the `site` folder

## Recommended Next Steps After Cloning In Kali

1. Clone the repo
2. Preview the current site
3. Add real brand assets into `site/assets/brand`
4. Create Episode 2 in `site/data/site-content.js`
5. Expand the homepage into a richer episode library
6. Decide when to move from static HTML/JS to a framework

## Suggested Immediate Priorities

### Priority 1

Create the first real brand asset pack:

- Logo wordmark
- Emma host visual
- Daniel host visual
- Thumbnail template
- Phrase card template
- Section card template

### Priority 2

Add Episode 2 and prove the content system works for multiple episodes.

### Priority 3

Upgrade the site into a more scalable frontend once the content and visual system feel stable.

## If You Resume This Project With Codex In Another Environment

Tell Codex this project already has:

- a finished Episode 1 production package
- a static website foundation in `/site`
- a brand kit in `docs/brand-kit-v1.md`
- GitHub Pages deployment in `.github/workflows/deploy-pages.yml`

Then ask it to continue from the current repo rather than rebuilding the strategy from scratch.

## Short Project Summary

Claro English is being built as a reusable content engine where one episode becomes:

- YouTube video
- Podcast audio
- Website lesson page
- Social content
- Future app content

The repo already contains the strategy and execution foundation for that system.
