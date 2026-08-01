/**
 * Main Orchestrator ES Module
 * @module app
 */
import CONFIG from './config.js';
import { $, applyThemeTokens } from './utils.js';
import { ParticleEngine } from './particles.js';
import { AudioController } from './audio.js';
import { initScrollAnimations } from './animations.js';

"use strict";

class App {
  constructor() {
    this.particleEngine = null;
    this.audioController = null;

    this.init();
  }

  init() {
    // 1. Inject Theme Tokens into CSS :root
    applyThemeTokens(CONFIG.theme);

    // 2. Hydrate Hero & Story Sections
    this.hydrateHero();
    this.hydrateStories();

    // 3. Initialize Particle Engine
    if (CONFIG.settings.enableParticles) {
      this.particleEngine = new ParticleEngine('ambient-particles', CONFIG.theme);
    }

    // 4. Initialize Audio Controller
    if (CONFIG.settings.enableMusic) {
      this.audioController = new AudioController('bg-music', CONFIG.music);
      
      if (CONFIG.music.syncWithAnimations && this.particleEngine) {
        this.audioController.onEnergyUpdate = (energy) => {
          this.particleEngine.setAudioEnergy(energy);
        };
      }

      this.setupAudioControls();
    }

    // 5. Run Loader sequence or immediately reveal Hero
    if (CONFIG.settings.enableLoader) {
      this.runLoaderSequence();
    } else {
      this.hideLoaderAndRevealApp();
    }

    // 6. Bind CTA Interactions & Scroll Animations
    this.bindEvents();
    initScrollAnimations();
  }

  hydrateHero() {
    const badge = $('#hero-badge');
    const title = $('#hero-title');
    const subtitle = $('#hero-subtitle');
    const cta = $('#hero-cta-btn');

    if (badge) badge.textContent = CONFIG.hero.badge;
    if (title) title.textContent = `${CONFIG.hero.title} ${CONFIG.recipientName}!`;
    if (subtitle) subtitle.textContent = CONFIG.hero.subtitle;
    if (cta) cta.textContent = CONFIG.hero.ctaButton;
  }

  hydrateStories() {
    const container = $('#story-container');
    if (!container || !CONFIG.stories) return;

    container.innerHTML = CONFIG.stories.map((story) => `
      <article class="story-card">
        <span class="story-chapter">${story.chapter}</span>
        <h3 class="story-title">${story.title}</h3>
        <p class="story-text">${story.text}</p>
      </article>
    `).join('');
  }

  setupAudioControls() {
    const audioBtn = $('#audio-toggle-btn');
    const mutedIcon = $('.audio-icon-muted', audioBtn);
    const playingIcon = $('.audio-icon-playing', audioBtn);

    if (!audioBtn) return;

    audioBtn.addEventListener('click', async () => {
      if (!this.audioController) return;
      const isPlaying = await this.audioController.togglePlay();

      if (isPlaying) {
        mutedIcon?.classList.add('hidden');
        playingIcon?.classList.remove('hidden');
      } else {
        mutedIcon?.classList.remove('hidden');
        playingIcon?.classList.add('hidden');
      }
    });
  }

  runLoaderSequence() {
    const loaderBar = $('#loader-bar-fill');
    const loaderPercent = $('#loader-percentage');
    const loaderStatus = $('#loader-status');

    let progress = 0;
    const phrases = [
      "Gathering stellar memories...",
      "Polishing golden sparkles...",
      "Preparing your gift..."
    ];

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 5;

      if (progress >= 30 && progress < 70) {
        if (loaderStatus) loaderStatus.textContent = phrases[1];
      } else if (progress >= 70) {
        if (loaderStatus) loaderStatus.textContent = phrases[2];
      }

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        setTimeout(() => {
          this.hideLoaderAndRevealApp();
        }, 400);
      }

      if (loaderBar) loaderBar.style.width = `${progress}%`;
      if (loaderPercent) loaderPercent.textContent = `${progress}%`;
    }, 120);
  }

  hideLoaderAndRevealApp() {
    const loader = $('#loader');
    const appMain = $('#app-main');

    if (loader) loader.classList.add('fade-out');
    if (appMain) appMain.classList.remove('hidden');
  }

  bindEvents() {
    const ctaBtn = $('#hero-cta-btn');

    if (ctaBtn) {
      ctaBtn.addEventListener('click', async () => {
        if (this.audioController && !this.audioController.isPlaying) {
          const audioBtn = $('#audio-toggle-btn');
          const isPlaying = await this.audioController.togglePlay();
          if (isPlaying && audioBtn) {
            $('.audio-icon-muted', audioBtn)?.classList.add('hidden');
            $('.audio-icon-playing', audioBtn)?.classList.remove('hidden');
          }
        }

        const storySection = $('#story');
        if (storySection) {
          storySection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
