# Execution Roadmap

## Phase 1: Strategy Foundation

Goal:
Define the brand and the repeatable content format.

Deliverables:

- Brand name options
- Audience definition
- Teaching style definition
- Episode template
- Initial topic backlog
- Platform account checklist

Success condition:
You can describe one episode clearly enough that a system could generate it repeatedly.

## Phase 2: Content Engine MVP

Goal:
Create a repeatable episode production workflow with minimal manual work.

Deliverables:

- Episode brief template
- Script generation prompt chain
- Video and audio production template
- Show notes and transcript pipeline
- Social repurposing templates
- Internal status tracker

Success condition:
One approved topic can become a full multi-platform content package in a single workflow.

## Phase 3: Website Launch

Goal:
Give the brand a central home.

Deliverables:

- Landing page
- About page
- Episode archive
- Episode detail pages
- Email signup
- Links to all platforms
- Basic SEO structure

Success condition:
A new visitor can understand the product, consume content, and join the audience from one place.

## Phase 4: Distribution Automation

Goal:
Reduce manual publishing effort.

Deliverables:

- YouTube upload workflow
- Podcast RSS workflow
- Instagram draft workflow
- X posting workflow
- Analytics tracking dashboard

Success condition:
Most platform publishing runs automatically or reaches a final review state with minimal effort.

## Phase 5: App MVP

Goal:
Turn content into a useful learning product.

Deliverables:

- User accounts
- Free lesson access
- Saved vocabulary
- Quizzes
- Progress tracking
- Premium gating

Success condition:
Users get extra value beyond passive listening.

## Phase 6: Monetization

Goal:
Introduce simple paid offers without hurting the free experience.

Deliverables:

- One-time upgrade offer
- Monthly subscription
- Billing integration
- Premium content entitlements
- Upgrade flow on website and app

Success condition:
The business can earn revenue from the audience with clean upgrade paths.

## Recommended Tech Decisions For MVP

### Build now

- Next.js website
- Supabase backend
- n8n automation workflows
- Stripe billing

### Delay until validation

- Native mobile apps
- Complex personalization
- Advanced AI tutor chat
- Heavy multi-language localization

## Immediate Next Steps

1. Decide the first target learner level
2. Decide whether the host is AI voice, your voice, or a hybrid
3. Choose a brand name and tone
4. Define the first five episode topics
5. Build the website and content data model first

## What I Recommend We Build Next

The highest-leverage next milestone is:

Build a simple website plus content pipeline MVP.

Why:

- It creates a public home for the brand
- It gives us structure for episodes and SEO
- It sets up the same content to feed YouTube, podcasts, social posts, and the future app
- It avoids prematurely building subscription complexity

## Practical MVP Scope

Launch with:

- One landing page
- One episode page template
- One content generation workflow
- One social repurposing workflow
- A manual approval step before public publishing

Skip for now:

- Full native app
- Full autonomous posting without review
- Too many premium features

## Decision Framework

When choosing what to build, ask:

1. Does this help create and distribute episodes faster?
2. Does this help learners get more value from each episode?
3. Does this keep operations simple enough to sustain weekly output?
