/**
 * Global Configuration & Content Data Object
 * @module config
 */

const CONFIG = {
  // Recipient details
  recipientName: "Bestie",
  
  // Theme styling overrides
  theme: {
    colorPrimary: "#f4c468",
    colorSecondary: "#ff7597",
    colorBg: "#09090e",
    colorSurface: "#121120",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', sans-serif"
  },

  // App feature flags
  settings: {
    enableParticles: true,
    enableMusic: true,
    enableLoader: true
  },

  // Background audio settings
  music: {
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-10781.mp3",
    volume: 0.5,
    syncWithAnimations: true
  },

  // Hero section configuration
  hero: {
    badge: "✨ Special Day",
    title: "Happy Birthday,",
    subtitle: "A modest space crafted specially for you to celebrate another beautiful year around the sun.",
    ctaButton: "Begin Experience ✨"
  },

  // Story chapters
  stories: [
    {
      chapter: "Chapter I",
      title: "The Beginning",
      text: "Every great journey starts with a simple moment that changes everything forever."
    },
    {
      chapter: "Chapter II",
      title: "Unforgettable Memories",
      text: "Through every laugh, late-night chat, and shared dream, these moments became priceless."
    },
    {
      chapter: "Chapter III",
      title: "Looking Ahead",
      text: "May the upcoming year bring even more joy, endless success, and magic into your life."
    }
  ]
};

export default CONFIG;
