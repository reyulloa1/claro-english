# Content System Foundation

## Purpose

This document explains how the current Claro English website foundation stores and renders content.

## Current Structure

The website lives in `/site` and uses a lightweight static content model.

Key files:

- `site/index.html` for the landing page shell
- `site/episode.html` for the episode page shell
- `site/app.js` for rendering page content
- `site/styles.css` for the shared visual system
- `site/data/site-content.js` for brand, homepage, platform, and episode data

## Current Content Model

### `siteContent`

Stores shared brand and marketing content:

- Brand name and taglines
- Hero copy
- Value pillars
- Season description
- Platform blocks
- Email signup messaging
- Host bios

### `episodes`

Stores episode-level content in an array.

Each episode currently includes:

- `slug`
- `number`
- `season`
- `title`
- `runtime`
- `level`
- `summary`
- `listenerOutcome`
- `keyPhrases`
- `takeaways`
- `nextEpisode`
- `artwork`

## Why This Foundation Works

This approach is good for the current phase because it is:

- Simple to edit
- Easy to understand
- Easy to duplicate for new episodes
- Good enough to validate the site before introducing a full backend

## How To Add Episode 2 Later

1. Add a new object to the `episodes` array in `site/data/site-content.js`
2. Give it a unique `slug`
3. Add its summary, phrases, takeaways, and artwork fields
4. Link to it from the homepage or future episode listings
5. Reuse the same episode page template via `episode.html?slug=...`

## Recommended Next Evolution

After we validate the site structure and content flow, the next upgrade should be:

1. Split episode data into separate files
2. Add a reusable template for episode pages
3. Introduce a real build system or framework
4. Add structured metadata for transcripts, assets, and distribution links
5. Connect the future app and website to the same episode data source

## Long-Term Target Model

Later, each episode should likely store:

- Full transcript
- Show notes
- Audio URL
- Video URL
- Social assets
- Thumbnail metadata
- Quiz or vocabulary data
- Publish status
- Platform links

## Relationship To The Brand Kit

The brand kit in [brand-kit-v1.md](C:\Users\reyli\OneDrive\Desktop\AI Podcast\docs\brand-kit-v1.md) defines how this content should look across platforms.

The website foundation in `/site` is the first implementation of that visual system.
