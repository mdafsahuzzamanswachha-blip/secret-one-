"use strict";

/* ==========================================================
   SECRET ONE
   Audio Controller
========================================================== */

let backgroundMusic = null;


/* ==========================================================
   INITIALIZE
========================================================== */

function initializeAudio() {

    backgroundMusic = document.getElementById("bgMusic");

    if (!backgroundMusic) return;

    backgroundMusic.volume = CONFIG.audio.volume;

    backgroundMusic.loop = CONFIG.audio.loop;

}


/* ==========================================================
   PLAY
========================================================== */

async function playMusic() {

    if (!backgroundMusic) {

        initializeAudio();

    }

    if (!backgroundMusic) return;

    try {

        await backgroundMusic.play();

    }

    catch (error) {

        console.warn("Music autoplay blocked.");

    }

}


/* ==========================================================
   PAUSE
========================================================== */

function pauseMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.pause();

}


/* ==========================================================
   TOGGLE
========================================================== */

function toggleMusic() {

    if (!backgroundMusic) {

        initializeAudio();

    }

    if (!backgroundMusic) return;

    if (backgroundMusic.paused) {

        playMusic();

    }

    else {

        pauseMusic();

    }

}


/* ==========================================================
   STOP
========================================================== */

function stopMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.pause();

    backgroundMusic.currentTime = 0;

}


/* ==========================================================
   SET VOLUME
========================================================== */

function setMusicVolume(volume) {

    if (!backgroundMusic) {

        initializeAudio();

    }

    if (!backgroundMusic) return;

    volume = Math.max(0, Math.min(1, volume));

    backgroundMusic.volume = volume;

}


/* ==========================================================
   FADE IN
========================================================== */

function fadeInMusic(duration = 2000) {

    if (!backgroundMusic) {

        initializeAudio();

    }

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0;

    playMusic();

    const targetVolume = CONFIG.audio.volume;

    const step = targetVolume / (duration / 100);

    const interval = setInterval(() => {

        if (backgroundMusic.volume >= targetVolume) {

            backgroundMusic.volume = targetVolume;

            clearInterval(interval);

            return;

        }

        backgroundMusic.volume += step;

    }, 100);

}


/* ==========================================================
   FADE OUT
========================================================== */

function fadeOutMusic(duration = 2000) {

    if (!backgroundMusic) return;

    const step = backgroundMusic.volume / (duration / 100);

    const interval = setInterval(() => {

        if (backgroundMusic.volume <= 0.02) {

            backgroundMusic.pause();

            backgroundMusic.currentTime = 0;

            clearInterval(interval);

            return;

        }

        backgroundMusic.volume -= step;

    }, 100);

}


/* ==========================================================
   MUTE
========================================================== */

function muteMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.muted = true;

}


/* ==========================================================
   UNMUTE
========================================================== */

function unmuteMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.muted = false;

}


/* ==========================================================
   END
========================================================== */
