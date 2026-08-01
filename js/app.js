"use strict";

/* ==========================================================
   SECRET ONE
   Main Application Controller
   Version 2.0
========================================================== */

/* ==========================================================
   APP STATE
========================================================== */

const AppState = {

    currentQuestion: 0,

    answers: [],

    started: false,

    musicEnabled: false,

    finished: false

};


/* ==========================================================
   INITIALIZATION
========================================================== */

ready(() => {

    bootApplication();

});


/* ==========================================================
   BOOT
========================================================== */

async function bootApplication() {

    disableScroll();

    preloadImages(CONFIG.gallery);

    preloadAudio($(SELECTOR.MUSIC));

    showLoader();

    await delay(1000);

    hideLoader();

    createWelcomeScreen();

}


/* ==========================================================
   WELCOME SCREEN
========================================================== */

function createWelcomeScreen() {

    const screen = createCard();

    const title = createTitle("SECRET ACCESS");

    const description = createParagraph(

        "এই অভিজ্ঞতাটি শুধুমাত্র একজন বিশেষ মানুষের জন্য তৈরি করা হয়েছে।"

    );

    const startButton = createButton(

        "শুরু করি",

        startExperience

    );

    screen.append(

        title,

        description,

        startButton

    );

    renderScreen(screen);

}


/* ==========================================================
   START EXPERIENCE
========================================================== */

function startExperience() {

    AppState.started = true;

    AppState.currentQuestion = 0;

    AppState.answers = [];

    createQuestionScreen();

}


/* ==========================================================
   QUESTION SCREEN
========================================================== */

function createQuestionScreen() {

    const data = CONFIG.questions[AppState.currentQuestion];

    const screen = createCard();

    const progress = createProgressBar();

    const title = createTitle(

        `প্রশ্ন ${AppState.currentQuestion + 1} / ${CONFIG.questions.length}`

    );

    const question = createParagraph(

        data.question

    );

    screen.append(

        progress.container,

        title,

        question

    );

    if (data.type === QUESTION_TYPE.CHOICE) {

        createChoiceOptions(

            screen,

            data

        );

    }

    else {

        createTextQuestion(

            screen,

            data

        );

    }

    renderScreen(screen);

}


/* ==========================================================
   PROGRESS BAR
========================================================== */

function createProgressBar() {

    const container = createElement(

        "div",

        {

            className: "progress"

        }

    );

    const fill = createElement(

        "div",

        {

            className: "progress-fill"

        }

    );

    container.appendChild(fill);

    setProgress(

        fill,

        AppState.currentQuestion + 1,

        CONFIG.questions.length

    );

    return {

        container,

        fill

    };

}


/* ==========================================================
   CHOICE OPTIONS
========================================================== */

function createChoiceOptions(

    screen,

    question

) {

    question.options.forEach(option => {

        const button = createButton(

            option,

            () => {

                submitAnswer(

                    option,

                    question

                );

            }

        );

        button.classList.add("option");

        screen.appendChild(button);

    });

}


/* ==========================================================
   TEXT QUESTION
========================================================== */

function createTextQuestion(

    screen,

    question

) {

    const input = createInput(

        "তোমার উত্তর লিখো..."

    );

    const button = createButton(

        "পরবর্তী",

        () => {

            submitAnswer(

                input.value,

                question

            );

        }

    );

    screen.append(

        input,

        button

    );

}

/* ==========================================================
   SUBMIT ANSWER
========================================================== */

function submitAnswer(userAnswer, question) {

    console.log("Question =", question);
    console.log("Answer =", question.answer);

    AppState.answers[AppState.currentQuestion] = userAnswer;

    if (question.answer === null) {

        alert("NULL WORKING");

        nextQuestion();

        return;

    }

    if (isValidAnswer(userAnswer, question.answer)) {

        nextQuestion();

    }

    else {

        showWrongAnswer(question);

    }

}


/* ==========================================================
   WRONG ANSWER
========================================================== */

function showWrongAnswer(question) {

    vibrate(120);

    const screen = createCard();

    addClass(screen, CLASS.SHAKE);

    const title = createTitle(

        CONFIG.wrongAnswer.title

    );

    const subtitle = createParagraph(

        CONFIG.wrongAnswer.subtitle

    );

    const reason = createParagraph(

        CONFIG.wrongAnswer.reason

    );

    const retryButton = createButton(

        "আবার চেষ্টা করি",

        () => {

            createQuestionScreen();

        }

    );

    retryButton.classList.add("option");

    screen.append(

        title,

        subtitle,

        reason,

        retryButton

    );

    renderScreen(screen);

}


/* ==========================================================
   NEXT QUESTION
========================================================== */

function nextQuestion() {

    AppState.currentQuestion++;

    saveProgress(AppState.currentQuestion);

    if (

        AppState.currentQuestion >=

        CONFIG.questions.length

    ) {

        startVerification();

        return;

    }

    createQuestionScreen();

}


/* ==========================================================
   VERIFICATION
========================================================== */

function startVerification() {

    if (typeof showVerification === "function") {

        showVerification();

        return;

    }

    fallbackVerification();

}


/* ==========================================================
   FALLBACK
========================================================== */

async function fallbackVerification() {

    const screen = createCard();

    const title = createTitle(

        "যাচাই করা হচ্ছে..."

    );

    const text = createParagraph("");

    screen.append(

        title,

        text

    );

    renderScreen(screen);

    for (

        const line

        of CONFIG.verification

    ) {

        await typeWriter(

            text,

            line

        );

        await delay(900);

    }

    await delay(700);

    startCelebration();

}


/* ==========================================================
   CELEBRATION
========================================================== */

function startCelebration() {

    if (

        typeof showBirthdayCelebration ===

        "function"

    ) {

        showBirthdayCelebration();

        return;

    }

    fallbackBirthday();

}


/* ==========================================================
   FALLBACK BIRTHDAY
========================================================== */

function fallbackBirthday() {

    const screen = createCard();

    const title = createTitle(

        CONFIG.birthday.title

    );

    const subtitle = createParagraph(

        CONFIG.birthday.subtitle

    );

    const button = createButton(

        "তোমার জন্য একটি চিঠি 💚",

        () => {

            openLetter();

        }

    );

    screen.append(

        title,

        subtitle,

        button

    );

    renderScreen(screen);

}


/* ==========================================================
   LETTER
========================================================== */

function openLetter() {

    if (

        typeof showLetterScreen ===

        "function"

    ) {

        showLetterScreen();

        return;

    }

    fallbackLetter();

}


/* ==========================================================
   FALLBACK LETTER
========================================================== */

function fallbackLetter() {

    const screen = createCard();

    const title = createTitle(

        "তোমার জন্য..."

    );

    const letter = createParagraph(

        CONFIG.letter

    );

    const button = createButton(

        "আমাদের কিছু স্মৃতি 📸",

        () => {

            openGallery();

        }

    );

    screen.append(

        title,

        letter,

        button

    );

    renderScreen(screen);

}


/* ==========================================================
   GALLERY
========================================================== */

function openGallery() {

    if (

        typeof showGalleryScreen ===

        "function"

    ) {

        showGalleryScreen();

        return;

    }

    fallbackGallery();

}


/* ==========================================================
   FALLBACK GALLERY
========================================================== */

function fallbackGallery() {

    const screen = createCard();

    const title = createTitle(

        "স্মৃতির অ্যালবাম"

    );

    screen.append(title);

    CONFIG.gallery.forEach(src => {

        const img = createElement(

            "img",

            {

                src

            }

        );

        img.style.width = "100%";

        img.style.borderRadius = "18px";

        img.style.marginBottom = "18px";

        screen.appendChild(img);

    });

    const button = createButton(

        "শেষ বার্তা",

        () => {

            finishExperience();

        }

    );

    screen.append(button);

    renderScreen(screen);

}

/* ==========================================================
   FINISH EXPERIENCE
========================================================== */

function finishExperience() {

    AppState.finished = true;

    const screen = createCard();

    const title = createTitle("💚");

    const message = createParagraph(

`জীবনে যত দূরেই যাই না কেন,

বন্ধুত্বটা যেন এমনই থেকে যায়।

শুভ জন্মদিন।`

    );

    const credit = createParagraph(

        "Made with 💚 for only one person."

    );

    const restartButton = createButton(

        "আবার শুরু",

        restartExperience

    );

    screen.append(

        title,

        message,

        credit,

        restartButton

    );

    renderScreen(screen);

}


/* ==========================================================
   RESTART
========================================================== */

function restartExperience() {

    AppState.currentQuestion = 0;

    AppState.answers = [];

    AppState.started = false;

    AppState.finished = false;

    saveProgress(0);

    createWelcomeScreen();

}


/* ==========================================================
   MUSIC
========================================================== */

function enableMusic() {

    const audio = $(SELECTOR.MUSIC);

    if (!audio) return;

    audio.volume = CONFIG.audio.volume;

    audio.loop = CONFIG.audio.loop;

    audio.play().catch(() => {});

    AppState.musicEnabled = true;

}


/* ==========================================================
   FIRST VISIT
========================================================== */

function isFirstVisit() {

    const visited = load(

        STORAGE.VISITED,

        false

    );

    if (!visited) {

        save(

            STORAGE.VISITED,

            true

        );

        return true;

    }

    return false;

}


/* ==========================================================
   RESUME
========================================================== */

function resumeProgress() {

    const progress = getProgress();

    if (

        progress > 0 &&

        progress < CONFIG.questions.length

    ) {

        AppState.currentQuestion = progress;

    }

}


/* ==========================================================
   RESET STORAGE
========================================================== */

function resetExperience() {

    remove(STORAGE.PROGRESS);

    remove(STORAGE.VISITED);

}


/* ==========================================================
   DEBUG
========================================================== */

window.SecretOne = {

    config: CONFIG,

    state: AppState,

    restart: restartExperience,

    reset: resetExperience

};


/* ==========================================================
   END OF FILE
========================================================== */
