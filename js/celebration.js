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

    const emoji = createElement("h1", {

        text: "🎉🎂💚"

    });

    const title = createTitle(

        "শুভ জন্মদিন, বিথী! 💚"

    );

    const text = createParagraph(

`আজকের এই ছোট্ট ওয়েবসাইটটা শুধু তোর জন্যই বানানো।

হয়তো এটা পৃথিবীর সবচেয়ে বড় উপহার না,
কিন্তু এর প্রতিটা লাইন, প্রতিটা ক্লিক আর প্রতিটা মুহূর্ত অনেক যত্ন নিয়ে বানানো।

আশা করি পুরো জার্নিটা তোর ভালো লেগেছে, আর তোর মুখে অন্তত একটা হাসি আনতে পেরেছি।

সৃষ্টিকর্তা যেন তোকে সবসময় ভালো রাখেন, সুস্থ রাখেন, আর তোর জীবনের প্রতিটা স্বপ্ন পূরণ করেন।

আবারও...

🎉 শুভ জন্মদিন, বিথী। 💚`

    );

    const credit = createParagraph(

        "Made with 💚 by Swachha"

    );

    const replayButton = createButton(

        "🔄 আবার শুরু করি",

        () => {

            location.reload();

        }

    );

    screen.append(

        emoji,
        title,
        text,
        credit,
        replayButton

    );

    renderScreen(screen);

}

/* ==========================================================
   END
========================================================== */
