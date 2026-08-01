"use strict";

/* ==========================================================
   SECRET ONE
   Timeline Controller
========================================================== */


/* ==========================================================
   VERIFICATION SCREEN
========================================================== */

async function showVerification() {

    const screen = createCard();

    const title = createTitle("যাচাই করা হচ্ছে...");

    const text = createParagraph("");

    screen.append(

        title,

        text

    );

    renderScreen(screen);

    animateScreen(screen);

    for (const line of CONFIG.verification) {

        await typeWriter(

            text,

            line,

            CONFIG.animation.typingSpeed

        );

        await delay(1000);

    }

    await delay(700);

    showReveal();

}


/* ==========================================================
   REVEAL
========================================================== */

async function showReveal() {

    const screen = createCard();

    const title = createTitle("");

    screen.append(title);

    renderScreen(screen);

    animateScreen(screen);

    for (const line of CONFIG.reveal) {

        await typeWriter(

            title,

            line,

            CONFIG.animation.typingSpeed

        );

        await delay(1200);

    }

    await delay(600);

    showBirthdayCelebration();

}


/* ==========================================================
   LOADING MESSAGE
========================================================== */

async function showLoadingMessage(message, duration = 1000) {

    const screen = createCard();

    const text = createParagraph(message);

    screen.append(text);

    renderScreen(screen);

    animateScreen(screen);

    await delay(duration);

}


/* ==========================================================
   SIMPLE COUNTDOWN
========================================================== */

async function countdown(seconds = 3) {

    const screen = createCard();

    const title = createTitle("");

    screen.append(title);

    renderScreen(screen);

    animateScreen(screen);

    for (

        let i = seconds;

        i >= 1;

        i--

    ) {

        title.textContent = i;

        await delay(1000);

    }

}


/* ==========================================================
   WAIT
========================================================== */

async function waitScreen(text, time = 1500) {

    const screen = createCard();

    const message = createParagraph(text);

    screen.append(message);

    renderScreen(screen);

    await delay(time);

}


/* ==========================================================
   END
========================================================== */
