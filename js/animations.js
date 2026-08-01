"use strict";

/* ==========================================================
   SECRET ONE
   Animation Engine
========================================================== */


/* ==========================================================
   FADE IN
========================================================== */

function fadeInElement(element, duration = ANIMATION.NORMAL) {

    if (!element) return;

    element.style.opacity = "0";

    element.style.transition = `opacity ${duration}ms ease`;

    requestAnimationFrame(() => {

        element.style.opacity = "1";

    });

}


/* ==========================================================
   FADE OUT
========================================================== */

function fadeOutElement(element, duration = ANIMATION.NORMAL) {

    return new Promise(resolve => {

        if (!element) {

            resolve();

            return;

        }

        element.style.transition = `opacity ${duration}ms ease`;

        element.style.opacity = "0";

        setTimeout(resolve, duration);

    });

}


/* ==========================================================
   SCALE IN
========================================================== */

function scaleIn(element) {

    if (!element) return;

    element.animate(

        [

            {

                opacity:0,

                transform:"scale(.8)"

            },

            {

                opacity:1,

                transform:"scale(1)"

            }

        ],

        {

            duration:400,

            easing:"ease-out",

            fill:"forwards"

        }

    );

}


/* ==========================================================
   SHAKE
========================================================== */

function shakeElement(element) {

    if (!element) return;

    element.animate(

        [

            {transform:"translateX(0px)"},

            {transform:"translateX(-8px)"},

            {transform:"translateX(8px)"},

            {transform:"translateX(-6px)"},

            {transform:"translateX(6px)"},

            {transform:"translateX(0px)"}

        ],

        {

            duration:450

        }

    );

}


/* ==========================================================
   BUTTON PRESS
========================================================== */

function pressAnimation(button) {

    if (!button) return;

    button.animate(

        [

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(.95)"

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:180

        }

    );

}


/* ==========================================================
   FLOAT
========================================================== */

function floatElement(element) {

    if (!element) return;

    element.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:2500,

            iterations:Infinity

        }

    );

}


/* ==========================================================
   POP
========================================================== */

function popElement(element) {

    if (!element) return;

    element.animate(

        [

            {

                transform:"scale(.5)",

                opacity:0

            },

            {

                transform:"scale(1.08)",

                opacity:1

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:500,

            easing:"ease-out",

            fill:"forwards"

        }

    );

}


/* ==========================================================
   SLIDE UP
========================================================== */

function slideUp(element) {

    if (!element) return;

    element.animate(

        [

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:500,

            fill:"forwards",

            easing:"ease"

        }

    );

}


/* ==========================================================
   TYPE FADE
========================================================== */

async function animateScreen(element){

    fadeInElement(element);

    slideUp(element);

}


/* ==========================================================
   END
========================================================== */
