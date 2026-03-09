import { episodes, siteContent } from './data/site-content.js';

const app = document.querySelector('#app');
const page = document.body.dataset.page;

function renderHome() {
  const featured = episodes[0];

  app.innerHTML = `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">${siteContent.hero.eyebrow}</p>
        <h1>${siteContent.hero.title}</h1>
        <p class="hero-body">${siteContent.hero.body}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${siteContent.hero.primaryCta.href}">${siteContent.hero.primaryCta.label}</a>
          <a class="button button-secondary" href="${siteContent.hero.secondaryCta.href}">${siteContent.hero.secondaryCta.label}</a>
        </div>
        <p class="trust-line">${siteContent.hero.trust}</p>
      </div>
      <aside class="hero-panel">
        <div class="brand-badge">${siteContent.brand.tagline}</div>
        <div class="host-stack">
          ${siteContent.brand.hosts
            .map(
              (host) => `
            <article class="host-card">
              <p class="host-name">${host.name}</p>
              <p class="host-role">${host.role}</p>
              <p class="host-bio">${host.bio}</p>
            </article>
          `
            )
            .join('')}
        </div>
      </aside>
    </section>

    <section class="section-grid" id="how-it-works">
      <div class="section-heading">
        <p class="eyebrow">How It Works</p>
        <h2>One clear lesson can power every platform.</h2>
        <p>
          Claro English is built as a content engine. Each episode starts as a guided real-life lesson and then expands into video,
          podcast audio, website content, social clips, and future app practice.
        </p>
      </div>
      <div class="pillar-grid">
        ${siteContent.valuePillars
          .map(
            (pillar) => `
          <article class="pillar-card">
            <h3>${pillar.title}</h3>
            <p>${pillar.description}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </section>

    <section class="season-panel" id="season-one">
      <div>
        <p class="eyebrow">Season Structure</p>
        <h2>${siteContent.season.name}</h2>
        <p>${siteContent.season.description}</p>
      </div>
      <article class="episode-highlight">
        <div class="episode-art">
          <p class="episode-eyebrow">${featured.artwork.eyebrow}</p>
          <h3>${featured.title}</h3>
          <p>${featured.artwork.kicker}</p>
        </div>
        <div class="episode-copy">
          <div class="episode-meta">
            <span>${featured.level}</span>
            <span>${featured.runtime}</span>
          </div>
          <p>${featured.summary}</p>
          <ul class="takeaway-list">
            ${featured.takeaways.map((takeaway) => `<li>${takeaway}</li>`).join('')}
          </ul>
          <a class="button button-primary" href="./episode.html?slug=${featured.slug}">Open Episode 1</a>
        </div>
      </article>
    </section>

    <section class="platform-strip" id="platforms">
      <div class="section-heading compact">
        <p class="eyebrow">Distribution</p>
        <h2>Consistent across every channel.</h2>
      </div>
      <div class="platform-grid">
        ${siteContent.platforms
          .map(
            (platform) => `
          <article class="platform-card">
            <h3>${platform.name}</h3>
            <p class="platform-status">${platform.status}</p>
            <p>${platform.detail}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </section>

    <section class="signup-card">
      <div>
        <p class="eyebrow">Stay Connected</p>
        <h2>${siteContent.email.title}</h2>
        <p>${siteContent.email.body}</p>
      </div>
      <form class="signup-form">
        <label>
          <span class="sr-only">Email address</span>
          <input type="email" placeholder="Email address" aria-label="Email address" />
        </label>
        <button class="button button-primary" type="button">Join Free</button>
      </form>
    </section>
  `;
}

function renderEpisode() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || episodes[0].slug;
  const episode = episodes.find((item) => item.slug === slug) || episodes[0];

  document.title = `${episode.title} | Claro English`;

  app.innerHTML = `
    <section class="episode-hero">
      <div class="episode-hero-copy">
        <p class="eyebrow">Season ${episode.season} · Episode ${episode.number}</p>
        <h1>${episode.title}</h1>
        <div class="episode-meta">
          <span>${episode.level}</span>
          <span>${episode.runtime}</span>
        </div>
        <p class="hero-body">${episode.summary}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="./index.html">Back to Home</a>
          <a class="button button-secondary" href="#phrases">Key Phrases</a>
        </div>
      </div>
      <aside class="lesson-card">
        <p class="lesson-label">Listener Outcome</p>
        <p>${episode.listenerOutcome}</p>
      </aside>
    </section>

    <section class="episode-layout">
      <article class="content-panel">
        <div class="section-heading compact">
          <p class="eyebrow">Lesson Overview</p>
          <h2>What learners will practice</h2>
        </div>
        <ul class="takeaway-list large">
          ${episode.takeaways.map((takeaway) => `<li>${takeaway}</li>`).join('')}
        </ul>
      </article>

      <article class="content-panel" id="phrases">
        <div class="section-heading compact">
          <p class="eyebrow">Core Phrases</p>
          <h2>The lines that anchor the episode</h2>
        </div>
        <div class="phrase-grid">
          ${episode.keyPhrases.map((phrase) => `<div class="phrase-chip">${phrase}</div>`).join('')}
        </div>
      </article>

      <article class="content-panel split-panel">
        <div>
          <p class="eyebrow">Hosts</p>
          <h2>Emma and Daniel</h2>
          <p>${siteContent.brand.hosts[0].bio}</p>
          <p>${siteContent.brand.hosts[1].bio}</p>
        </div>
        <div>
          <p class="eyebrow">Next Lesson</p>
          <h2>What comes after the airport</h2>
          <p>${episode.nextEpisode}</p>
        </div>
      </article>
    </section>
  `;
}

if (page === 'episode') {
  renderEpisode();
} else {
  renderHome();
}
