export const siteContent = {
  brand: {
    name: 'Claro English',
    tagline: 'Real English for Real Life in the U.S.',
    supportTaglines: [
      'Your First English for Life in the U.S.',
      'Clear English for Your New Life in America'
    ],
    description:
      'Claro English helps Spanish speakers build confidence with beginner-friendly English lessons for everyday life in the United States.',
    audience: 'Spanish speakers starting life in the U.S.',
    hosts: [
      {
        name: 'Emma',
        role: 'Your English Guide',
        bio: 'Emma leads each lesson with calm, clear explanations and practical English you can use right away.'
      },
      {
        name: 'Daniel',
        role: 'Learning with You',
        bio: 'Daniel asks the questions many learners have and helps turn each lesson into a natural conversation.'
      }
    ]
  },
  hero: {
    eyebrow: 'Beginner-friendly English for Spanish speakers',
    title: 'Learn the English you need for your first days in the U.S.',
    body:
      'Watch and listen to practical lessons with Emma and Daniel. Every episode is built around real situations like airports, work, shopping, phone calls, and doctor visits.',
    primaryCta: { label: 'Start with Episode 1', href: './episode.html?slug=episode-01-airport' },
    secondaryCta: { label: 'Explore the Method', href: '#how-it-works' },
    trust: 'Free to start. Built for confidence. Designed for real life.'
  },
  valuePillars: [
    {
      title: 'Real situations',
      description: 'Learn English for the moments that matter most when you arrive, settle in, and start building life in the U.S.'
    },
    {
      title: 'Clear explanations',
      description: 'Emma and Daniel keep every lesson calm, practical, and easy to follow for true beginners.'
    },
    {
      title: 'One lesson, many formats',
      description: 'Each episode powers YouTube, podcast, web, social clips, and future app lessons from one content system.'
    }
  ],
  season: {
    name: 'Season 1: Your First Days in the U.S.',
    description:
      'Follow a practical story arc from the airport to your first ride, first meal, first job conversation, and other everyday situations.'
  },
  platforms: [
    { name: 'YouTube', status: 'Launching soon', detail: 'Full video episodes and shorts' },
    { name: 'Spotify', status: 'Launching soon', detail: 'Audio episodes for listening anywhere' },
    { name: 'Apple Podcasts', status: 'Launching soon', detail: 'Podcast feed for Apple listeners' },
    { name: 'Instagram', status: 'Launching soon', detail: 'Clips, carousels, and phrase practice' },
    { name: 'X', status: 'Launching soon', detail: 'Quick tips and episode threads' }
  ],
  email: {
    title: 'Get the next lesson first',
    body: 'Join the Claro English list for new episode alerts, learning tips, and future app access.'
  }
};

export const episodes = [
  {
    slug: 'episode-01-airport',
    number: 1,
    season: 1,
    title: 'First Day in the U.S.: At the Airport',
    runtime: '8-12 min',
    level: 'Beginner',
    summary:
      'Emma and Daniel teach simple airport English for arriving in the U.S., including how to answer common questions, show your passport, and ask someone to repeat.',
    listenerOutcome:
      'By the end of this lesson, listeners should feel more confident understanding airport questions and giving short, clear answers.',
    keyPhrases: [
      'Here is my passport.',
      'I am here for vacation.',
      'I am here for work.',
      'I am visiting family.',
      'I am staying for two weeks.',
      'I am staying at a hotel in Miami.',
      'Can you repeat that, please?',
      'Sorry, I am learning English.'
    ],
    takeaways: [
      'Understand what airport officers may ask you',
      'Give simple answers about your visit and stay',
      'Use polite phrases if you need help',
      'Practice clear English without needing perfect grammar'
    ],
    nextEpisode: 'Getting a ride and going to your hotel or home after the airport',
    artwork: {
      eyebrow: 'Episode 1',
      kicker: 'Passport control confidence'
    }
  }
];
