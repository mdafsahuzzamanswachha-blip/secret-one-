"use strict";

/* ==========================================================
   SECRET ONE
   App Engine
   Part 1
========================================================== */

let currentQuestion = 0;

let answers = [];

/* ==========================================================
   INITIALIZE
========================================================== */

ready(async () => {

    initializeApp();

});

/* ==========================================================
   APP START
========================================================== */

async function initializeApp() {

    disableScroll();

    preloadImages(CONFIG.gallery);

    preloadAudio($(SELECTOR.MUSIC));

    showLoader();

    await delay(1200);

    hideLoader();

    showWelcomeScreen();

}

/* ==========================================================
   WELCOME SCREEN
========================================================== */

function showWelcomeScreen() {

    const screen = createCard();

    const title = createTitle("SECRET ACCESS");

    const text = createParagraph(

        "এই অভিজ্ঞতাটি শুধুমাত্র একজন বিশেষ মানুষের জন্য তৈরি করা হয়েছে।"

    );

    const button = createButton(

        "চল শুরু করা যাক",

        () => {

            currentQuestion = 0;

            showQuestion();

        }

    );

    screen.append(

        title,

        text,

        button

    );

    renderScreen(screen);

}

/* ==========================================================
   QUESTION ENGINE
========================================================== */

function showQuestion() {

    const data = CONFIG.questions[currentQuestion];

    const screen = createCard();

    const progress = createElement("div", {

        className: "progress"

    });

    const fill = createElement("div", {

        className: "progress-fill"

    });

    progress.appendChild(fill);

    setProgress(

        fill,

        currentQuestion + 1,

        CONFIG.questions.length

    );

    const title = createTitle(

        `প্রশ্ন ${currentQuestion + 1}`

    );

    const question = createParagraph(

        data.question

    );

    screen.append(

        progress,

        title,

        question

    );

    if (data.type === "choice") {

        renderChoiceQuestion(

            screen,

            data

        );

    }

    else {

        renderTextQuestion(

            screen,

            data

        );

    }

    renderScreen(screen);

}

/* ==========================================================
   CHOICE QUESTION
========================================================== */

function renderChoiceQuestion(

    screen,

    question

) {

    question.options.forEach(option => {

        const button = createButton(

            option,

            () => {

                processAnswer(

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

function renderTextQuestion(

    screen,

    question

) {

    const input = createInput(

        "তোমার উত্তর লিখো..."

    );

    const button = createButton(

        "পরবর্তী",

        () => {

            processAnswer(

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
   ANSWER PROCESSOR
========================================================== */

function processAnswer(userAnswer, question) {

    answers.push(userAnswer);

    if (question.answer === null) {

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

    const screen = createCard();

    const title = createTitle(

        CONFIG.wrongAnswer.title

    );

    const subtitle = createParagraph(

        CONFIG.wrongAnswer.subtitle

    );

    const reason = createParagraph(

        CONFIG.wrongAnswer.reason

    );

    const button = createButton(

        "আবার চেষ্টা করি",

        () => {

            showQuestion();

        }

    );

    button.classList.add("option");

    screen.append(

        title,

        subtitle,

        reason,

        button

    );

    renderScreen(screen);

}


/* ==========================================================
   NEXT QUESTION
========================================================== */

function nextQuestion() {

    currentQuestion++;

    saveProgress(currentQuestion);

    if (

        currentQuestion >=

        CONFIG.questions.length

    ) {

        showVerification();

        return;

    }

    showQuestion();

}


/* ==========================================================
   VERIFICATION
========================================================== */

async function showVerification() {

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

    await delay(600);

    showReveal();

}


/* ==========================================================
   REVEAL
========================================================== */

async function showReveal() {

    const screen = createCard();

    const text = createTitle("");

    screen.append(text);

    renderScreen(screen);

    for (

        const line

        of CONFIG.reveal

    ) {

        await typeWriter(

            text,

            line,

            40

        );

        await delay(1200);

    }

    showBirthday();

}
/* ==========================================================
   BIRTHDAY SCREEN
========================================================== */

function showBirthday() {

    const screen = createCard();

    const title = createTitle(

        CONFIG.birthday.title

    );

    const subtitle = createParagraph(

        CONFIG.birthday.subtitle

    );

    const button = createButton(

        "একটা চিঠি আছে 💚",

        () => {

            showLetter();

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
   LETTER SCREEN
========================================================== */

function showLetter() {

    const screen = createCard();

    const title = createTitle(

        "তোমার জন্য..."

    );

    const letter = createParagraph(

        CONFIG.letter

    );

    const button = createButton(

        "কিছু স্মৃতি দেখি 📸",

        () => {

            showGallery();

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

function showGallery() {

    const screen = createCard();

    const title = createTitle(

        "আমাদের কিছু মুহূর্ত"

    );

    screen.appendChild(title);

    CONFIG.gallery.forEach(src => {

        const image = createElement("img", {

            src

        });

        image.style.width = "100%";

        image.style.borderRadius = "18px";

        image.style.marginBottom = "18px";

        screen.appendChild(image);

    });

    const button = createButton(

        "শেষ বার্তা",

        () => {

            showEnding();

        }

    );

    screen.appendChild(button);

    renderScreen(screen);

}


/* ==========================================================
   ENDING
========================================================== */

function showEnding() {

    const screen = createCard();

    const title = createTitle(

        "💚"

    );

    const text = createParagraph(

`জীবনে যত দূরেই যাই না কেন,

বন্ধুত্বটা যেন এমনই থেকে যায়।

শুভ জন্মদিন।`

    );

    const button = createButton(

        "আবার শুরু",

        () => {

            currentQuestion = 0;

            answers = [];

            showWelcomeScreen();

        }

    );

    screen.append(

        title,

        text,

        button

    );

    renderScreen(screen);

}


/* ==========================================================
   END OF FILE
========================================================== */
