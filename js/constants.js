"use strict";

/* ==========================================================
   SECRET ONE
   Global Constants
   Version : 1.0.0
========================================================== */

/* ==========================================================
   APP
========================================================== */

const APP = Object.freeze({

    NAME: "Secret One",

    VERSION: "1.0.0",

    LANGUAGE: "bn"

});


/* ==========================================================
   COLORS
========================================================== */

const COLORS = Object.freeze({

    BACKGROUND: "#050505",

    SURFACE: "#0E0E0E",

    CARD: "#151515",

    PRIMARY: "#00FF88",

    PRIMARY_DARK: "#00C96B",

    PRIMARY_LIGHT: "#6BFFC1",

    TEXT: "#FFFFFF",

    MUTED: "#BDBDBD",

    BORDER: "#2A2A2A",

    DANGER: "#FF4D4F"

});


/* ==========================================================
   SCREEN IDS
========================================================== */

const SCREEN = Object.freeze({

    BOOT: "boot",

    WELCOME: "welcome",

    QUESTION: "question",

    VERIFY: "verify",

    REVEAL: "reveal",

    BIRTHDAY: "birthday",

    LETTER: "letter",

    GALLERY: "gallery",

    ENDING: "ending"

});


/* ==========================================================
   QUESTION TYPES
========================================================== */

const QUESTION_TYPE = Object.freeze({

    TEXT: "text",

    CHOICE: "choice"

});


/* ==========================================================
   STORAGE KEYS
========================================================== */

const STORAGE = Object.freeze({

    MUSIC: "secret-one-music",

    VISITED: "secret-one-visited",

    PROGRESS: "secret-one-progress"

});


/* ==========================================================
   AUDIO
========================================================== */

const AUDIO = Object.freeze({

    DEFAULT_VOLUME: 0.60

});


/* ==========================================================
   ANIMATION
========================================================== */

const ANIMATION = Object.freeze({

    FAST: 250,

    NORMAL: 500,

    SLOW: 900,

    TYPING_SPEED: 40

});


/* ==========================================================
   ICONS
========================================================== */

const ICONS = Object.freeze({

    SUCCESS: "✅",

    ERROR: "❌",

    HEART: "💚",

    STAR: "⭐",

    GIFT: "🎁",

    PARTY: "🎉",

    CAKE: "🎂"

});


/* ==========================================================
   CSS CLASS
========================================================== */

const CLASS = Object.freeze({

    ACTIVE: "active",

    HIDDEN: "hidden",

    SHOW: "show",

    FADE_IN: "fade-in",

    FADE_OUT: "fade-out",

    SCALE_IN: "scale-in",

    SHAKE: "shake"

});


/* ==========================================================
   SELECTORS
========================================================== */

const SELECTOR = Object.freeze({

    APP: "#app",

    LOADER: "#global-loader",

    MUSIC: "#bgMusic"

});


/* ==========================================================
   MESSAGE
========================================================== */

const MESSAGE = Object.freeze({

    LOADING: "লোড হচ্ছে...",

    VERIFYING: "যাচাই করা হচ্ছে...",

    SUCCESS: "সম্পন্ন হয়েছে"

});


/* ==========================================================
   FREEZE
========================================================== */

Object.freeze(APP);
Object.freeze(COLORS);
Object.freeze(SCREEN);
Object.freeze(QUESTION_TYPE);
Object.freeze(STORAGE);
Object.freeze(AUDIO);
Object.freeze(ANIMATION);
Object.freeze(ICONS);
Object.freeze(CLASS);
Object.freeze(SELECTOR);
Object.freeze(MESSAGE);
