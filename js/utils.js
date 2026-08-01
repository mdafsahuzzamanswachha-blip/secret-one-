"use strict";

/* ==========================================================
   SECRET ONE
   Utility Functions
   Part 1
========================================================== */

/* ==========================================================
   DOM HELPERS
========================================================== */

const $ = (selector, parent = document) => parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* ==========================================================
   ELEMENT CREATOR
========================================================== */

function createElement(tag, options = {}) {

    const element = document.createElement(tag);

    if (options.id) {
        element.id = options.id;
    }

    if (options.className) {
        element.className = options.className;
    }

    if (options.text) {
        element.textContent = options.text;
    }

    if (options.html) {
        element.innerHTML = options.html;
    }

    if (options.src) {
        element.src = options.src;
    }

    if (options.href) {
        element.href = options.href;
    }

    if (options.type) {
        element.type = options.type;
    }

    if (options.placeholder) {
        element.placeholder = options.placeholder;
    }

    if (options.value !== undefined) {
        element.value = options.value;
    }

    if (options.attributes) {

        Object.entries(options.attributes).forEach(([key, value]) => {

            element.setAttribute(key, value);

        });

    }

    return element;

}


/* ==========================================================
   APP ROOT
========================================================== */

function getApp() {

    return $(SELECTOR.APP);

}


/* ==========================================================
   LOADER
========================================================== */

function showLoader() {

    const loader = $(SELECTOR.LOADER);

    if (!loader) return;

    loader.style.display = "flex";

}


function hideLoader() {

    const loader = $(SELECTOR.LOADER);

    if (!loader) return;

    loader.style.display = "none";

}


/* ==========================================================
   SCREEN
========================================================== */

function clearApp() {

    const app = getApp();

    app.innerHTML = "";

}


function renderScreen(element) {

    clearApp();

    getApp().appendChild(element);

}


/* ==========================================================
   CARD
========================================================== */

function createCard() {

    return createElement("div", {

        className: "screen fade-in"

    });

}


/* ==========================================================
   BUTTON
========================================================== */

function createButton(text, callback) {

    const button = createElement("button", {

        text

    });

    button.addEventListener("click", callback);

    return button;

}


/* ==========================================================
   INPUT
========================================================== */

function createInput(placeholder = "") {

    return createElement("input", {

        placeholder

    });

}


/* ==========================================================
   TITLE
========================================================== */

function createTitle(text) {

    return createElement("h1", {

        text

    });

}


/* ==========================================================
   PARAGRAPH
========================================================== */

function createParagraph(text) {

    return createElement("p", {

        text

    });

}


/* ==========================================================
   DELAY
========================================================== */

function delay(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


/* ==========================================================
   RANDOM
========================================================== */

function random(min, max) {

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}


/* ==========================================================
   SHUFFLE
========================================================== */

function shuffle(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }

    return arr;

}


/* ==========================================================
   EMPTY CHECK
========================================================== */

function isEmpty(value) {

    return value === null ||

        value === undefined ||

        value === "";

}


/* ==========================================================
   STRING NORMALIZE
========================================================== */

function normalize(text) {

    return text

        .trim()

        .toLowerCase();

}
/* ==========================================================
   TYPE WRITER
========================================================== */

async function typeWriter(element, text, speed = ANIMATION.TYPING_SPEED) {

    element.textContent = "";

    for (const char of text) {

        element.textContent += char;

        await delay(speed);

    }

}


/* ==========================================================
   FADE EFFECT
========================================================== */

async function fadeOut(element) {

    element.classList.remove(CLASS.FADE_IN);

    element.classList.add(CLASS.FADE_OUT);

    await delay(ANIMATION.NORMAL);

}


async function fadeIn(element) {

    element.classList.remove(CLASS.FADE_OUT);

    element.classList.add(CLASS.FADE_IN);

    await delay(ANIMATION.NORMAL);

}


/* ==========================================================
   CLASS HELPERS
========================================================== */

function addClass(element, className) {

    if (!element) return;

    element.classList.add(className);

}


function removeClass(element, className) {

    if (!element) return;

    element.classList.remove(className);

}


function toggleClass(element, className) {

    if (!element) return;

    element.classList.toggle(className);

}


/* ==========================================================
   STORAGE
========================================================== */

function save(key, value) {

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}


function load(key, defaultValue = null) {

    const value = localStorage.getItem(key);

    if (value === null) {

        return defaultValue;

    }

    try {

        return JSON.parse(value);

    }

    catch {

        return defaultValue;

    }

}


function remove(key) {

    localStorage.removeItem(key);

}


function clearStorage() {

    localStorage.clear();

}


/* ==========================================================
   SCROLL
========================================================== */

function disableScroll() {

    document.body.style.overflow = "hidden";

}


function enableScroll() {

    document.body.style.overflow = "auto";

}


/* ==========================================================
   PROGRESS
========================================================== */

function saveProgress(index) {

    save(STORAGE.PROGRESS, index);

}


function getProgress() {

    return load(STORAGE.PROGRESS, 0);

}


/* ==========================================================
   INPUT VALIDATION
========================================================== */

function isValidAnswer(userAnswer, correctAnswer) {

    return normalize(userAnswer) === normalize(correctAnswer);

}


/* ==========================================================
   SAFE HTML
========================================================== */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* ==========================================================
   WAIT FOR CLICK
========================================================== */

function waitForClick(button) {

    return new Promise(resolve => {

        button.addEventListener(

            "click",

            resolve,

            {

                once: true

            }

        );

    });

}


/* ==========================================================
   IMAGE PRELOAD
========================================================== */

function preloadImages(images = []) {

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

}


/* ==========================================================
   AUDIO PRELOAD
========================================================== */

function preloadAudio(audio) {

    if (!audio) return;

    audio.load();

}
/* ==========================================================
   EVENT HELPERS
========================================================== */

function on(element, event, callback, options = false) {

    if (!element) return;

    element.addEventListener(event, callback, options);

}


function off(element, event, callback) {

    if (!element) return;

    element.removeEventListener(event, callback);

}


/* ==========================================================
   ENABLE / DISABLE
========================================================== */

function disable(element) {

    if (!element) return;

    element.disabled = true;

}


function enable(element) {

    if (!element) return;

    element.disabled = false;

}


/* ==========================================================
   SHOW / HIDE
========================================================== */

function show(element, display = "block") {

    if (!element) return;

    element.style.display = display;

}


function hide(element) {

    if (!element) return;

    element.style.display = "none";

}


/* ==========================================================
   SCREEN TRANSITION
========================================================== */

async function changeScreen(nextScreen) {

    const app = getApp();

    if (!app) return;

    await fadeOut(app);

    renderScreen(nextScreen);

    await fadeIn(app);

}


/* ==========================================================
   PROGRESS BAR
========================================================== */

function setProgress(progressElement, current, total) {

    if (!progressElement) return;

    const percent = (current / total) * 100;

    progressElement.style.width = percent + "%";

}


/* ==========================================================
   DATE
========================================================== */

function currentYear() {

    return new Date().getFullYear();

}


/* ==========================================================
   DEVICE
========================================================== */

function isMobile() {

    return window.innerWidth <= 768;

}


/* ==========================================================
   VIBRATION
========================================================== */

function vibrate(duration = 60) {

    if ("vibrate" in navigator) {

        navigator.vibrate(duration);

    }

}


/* ==========================================================
   COPY
========================================================== */

async function copy(text) {

    try {

        await navigator.clipboard.writeText(text);

        return true;

    }

    catch {

        return false;

    }

}


/* ==========================================================
   ID GENERATOR
========================================================== */

function uuid(length = 10) {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {

        result += chars.charAt(

            Math.floor(Math.random() * chars.length)

        );

    }

    return result;

}


/* ==========================================================
   DEBOUNCE
========================================================== */

function debounce(callback, delayTime = 300) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delayTime);

    };

}


/* ==========================================================
   THROTTLE
========================================================== */

function throttle(callback, limit = 300) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

}


/* ==========================================================
   READY
========================================================== */

function ready(callback) {

    if (document.readyState === "loading") {

        document.addEventListener(

            "DOMContentLoaded",

            callback

        );

    } else {

        callback();

    }

}


/* ==========================================================
   END OF FILE
========================================================== */
