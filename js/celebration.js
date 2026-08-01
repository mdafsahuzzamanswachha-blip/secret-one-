"use strict";

/* ==========================================================
   SECRET ONE
   Celebration Controller
========================================================== */


/* ==========================================================
   BIRTHDAY SCREEN
========================================================== */

function showBirthdayCelebration() {

    startHeartParticles();

    fadeInMusic();

    const screen = createCard();

    const title = createTitle(

        CONFIG.birthday.title

    );

    const subtitle = createParagraph(

        CONFIG.birthday.subtitle

    );

    const emoji = createElement("h1", {

        text: "🎂"

    });

    floatElement(emoji);

    popElement(title);

    const button = createButton(

        "তোমার জন্য একটা চিঠি 💚",

        () => {

            stopHeartParticles();

            showLetterScreen();

        }

    );

    screen.append(

        emoji,

        title,

        subtitle,

        button

    );

    renderScreen(screen);

}



/* ==========================================================
   CONFETTI
========================================================== */

function launchConfetti() {

    for (

        let i = 0;

        i < 120;

        i++

    ) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";

        piece.style.width = random(6,12) + "px";

        piece.style.height = random(10,18) + "px";

        piece.style.left = random(

            0,

            window.innerWidth

        ) + "px";

        piece.style.top = "-20px";

        piece.style.borderRadius = "3px";

        piece.style.pointerEvents = "none";

        piece.style.background =

            Math.random() > .5

                ? COLORS.PRIMARY

                : "#ffffff";

        document.body.appendChild(piece);

        const duration = random(

            2500,

            5000

        );

        piece.animate(

            [

                {

                    transform:"translateY(0) rotate(0deg)",

                    opacity:1

                },

                {

                    transform:

                    `translateY(${window.innerHeight+100}px) rotate(${random(180,720)}deg)`,

                    opacity:0

                }

            ],

            {

                duration,

                easing:"linear"

            }

        );

        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}


/* ==========================================================
   FIREWORKS
========================================================== */

function launchFireworks() {

    launchConfetti();

    setTimeout(

        launchConfetti,

        800

    );

    setTimeout(

        launchConfetti,

        1600

    );

}


/* ==========================================================
   ENDING
========================================================== */

function showFinalEnding() {

    stopHeartParticles();

    launchFireworks();

    const screen = createCard();

    const title = createTitle(

        "THE END 💚"

    );

    const text = createParagraph(

`শুভ জন্মদিন।

তোমার প্রতিটি স্বপ্ন পূরণ হোক।

ভালো থেকো সবসময়।`

    );

    const credit = createParagraph(

        "Made with 💚\nfor only one person."

    );

    screen.append(

        title,

        text,

        credit

    );

    renderScreen(screen);

}


/* ==========================================================
   END
========================================================== */
