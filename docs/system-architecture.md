# System Architecture

## Overview

The business should run as a content engine with one main source asset per episode.

Core flow:

1. Strategy chooses a topic
2. AI builds the lesson plan and script
3. Production creates video, audio, transcript, and artwork
4. Distribution sends content to YouTube, podcast platforms, website, and social channels
5. The app reuses the same learning assets

## Recommended First Architecture

### 1. Planning layer

Purpose:

- Topic backlog
- Episode calendar
- Audience-level tagging
- Approval workflow

Suggested tools:

- Notion, Airtable, or a simple internal admin later

Main records:

- Episode
- Content asset
- Distribution status
- Social post
- App lesson

### 2. Content generation layer

Purpose:

- Generate episode briefs
- Generate scripts
- Create show notes
- Create transcripts and summaries
- Create social copy variations

Likely services:

- LLM for outlines, scripts, captions, summaries, quizzes
- TTS for AI voice if fully synthetic
- Optional avatar/video generation if you choose a virtual host

Outputs per episode:

- Full script
- Simplified learner summary
- Vocabulary list
- Quiz questions
- Transcript
- Titles and descriptions
- Social post variants

### 3. Media production layer

Purpose:

- Turn scripts into publishable video and audio
- Create thumbnails and social assets

Possible pipeline:

- AI voice or recorded voice
- Video template scenes
- Waveform or avatar visuals
- Subtitle rendering
- Audio mastering
- Thumbnail generation

Important principle:
Start with a templated visual system. Fancy production can come later. Consistency matters more than complexity at launch.

### 4. Distribution layer

Purpose:

- Publish or draft content to each platform

Channels:

- YouTube video upload
- Podcast RSS feed for Spotify and Apple Podcasts
- Instagram post or draft
- X post or draft
- Website episode page
- App lesson sync

Implementation pattern:

- Use APIs where stable
- Use automation tools where APIs are limited
- Default to draft mode for risky platforms

### 5. User product layer

Purpose:

- Website and app delivery
- User accounts
- Premium access control

Suggested product split:

- Marketing website and episode archive
- Web app or mobile app for learning tools
- Shared backend for content, users, billing, and entitlements

## Recommended MVP Stack

### Website and app

- Next.js for website and web app foundation
- Tailwind or component library only if it matches the future brand
- React Native with Expo later if mobile apps become necessary

### Backend

- Supabase or Firebase for rapid start
- PostgreSQL if using Supabase
- Object storage for media and transcripts

### Automation and orchestration

- n8n or Make for workflow automation
- Background jobs for content generation and publishing
- Webhooks between content system, website, and app

### Payments

- Stripe for subscriptions and one-time purchases

### Analytics

- Website analytics
- Product analytics for app usage
- Platform-native analytics for YouTube and podcast performance

## Data Model Sketch

### Episode

- id
- title
- slug
- topic
- level
- status
- script
- transcript
- audio_url
- video_url
- thumbnail_url
- show_notes
- publish_date

### Lesson asset

- id
- episode_id
- vocabulary
- key_phrases
- quiz
- pronunciation_notes
- downloadable_resources

### Distribution record

- id
- episode_id
- channel
- external_id
- status
- published_at
- error_log

### User

- id
- email
- plan
- preferred_level
- preferred_language

## Automation Design

### Low-risk fully automated tasks

- Topic clustering and suggestions
- Script drafting
- Show notes generation
- Transcript cleanup
- Website page generation
- Quiz generation
- Internal metadata updates

### Human review recommended

- Final episode script approval
- YouTube thumbnail/title approval
- Social post review
- Payment and pricing changes
- Anything that logs into third-party platforms and publishes publicly

## End-to-End Episode Workflow

1. New topic enters backlog
2. AI generates episode brief
3. AI generates full lesson script
4. Human approves or lightly edits
5. System generates audio and video assets
6. System creates transcript, notes, vocabulary, and quiz
7. System creates YouTube metadata and podcast metadata
8. System publishes website episode page
9. System prepares social posts and channel drafts
10. System syncs lesson content into the app
11. Analytics are collected for future optimization

## Risks To Plan Around

- Platform API limitations for Instagram and podcast distribution
- Quality drift if publishing is fully autonomous
- Copyright and voice likeness issues with AI media
- Subscription complexity before enough users exist
- Overbuilding the app before validating the content format

## Best First Principle

Before building full autonomy, prove this loop:

One episode in -> one video, one audio episode, one website post, three social assets, and one app lesson out.
