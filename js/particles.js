"use strict";

/* ==========================================================
   SECRET ONE
   Background Particles
========================================================== */

let particleContainer = null;


/* ==========================================================
   CREATE CONTAINER
========================================================== */

function initializeParticles() {

    if (particleContainer) return;

    particleContainer = document.createElement("div");

    particleContainer.id = "particles";

    particleContainer.style.position = "fixed";
    particleContainer.style.inset = "0";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.overflow = "hidden";
    particleContainer.style.zIndex = "-1";

    document.body.appendChild(particleContainer);

}


/* ==========================================================
   CREATE PARTICLE
========================================================== */

function createParticle() {

    const particle = document.createElement("div");

    const size = random(6, 16);

    particle.style.position = "absolute";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = random(0, window.innerWidth) + "px";
    particle.style.top = (window.innerHeight + size) + "px";
    particle.style.borderRadius = "50%";
    particle.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
    particle.style.background = COLORS.PRIMARY;
    particle.style.boxShadow = `0 0 12px ${COLORS.PRIMARY}`;

    particleContainer.appendChild(particle);

    const duration = random(7000, 12000);

    particle.animate(

        [

            {
                transform: "translateY(0px) scale(1)"
            },

            {
                transform: `translateY(-${window.innerHeight + 200}px) translateX(${random(-80,80)}px) scale(.2)`
            }

        ],

        {

            duration,

            easing: "linear"

        }

    );

    setTimeout(() => {

        particle.remove();

    }, duration);

}


/* ==========================================================
   START
========================================================== */

function startParticles(count = 25) {

    initializeParticles();

    stopParticles();

    window.secretParticleInterval = setInterval(() => {

        createParticle();

    }, 450);

    for (let i = 0; i < count; i++) {

        setTimeout(createParticle, i * 120);

    }

}


/* ==========================================================
   STOP
========================================================== */

function stopParticles() {

    if (window.secretParticleInterval) {

        clearInterval(window.secretParticleInterval);

    }

}


/* ==========================================================
   HEART PARTICLE
========================================================== */

function createHeartParticle() {

    if (!particleContainer) {

        initializeParticles();

    }

    const heart = document.createElement("div");

    heart.textContent = "💚";

    heart.style.position = "absolute";
    heart.style.left = random(0, window.innerWidth) + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = random(18, 32) + "px";
    heart.style.opacity = ".9";

    particleContainer.appendChild(heart);

    const duration = random(5000, 8000);

    heart.animate(

        [

            {

                transform: "translateY(0px) rotate(0deg)",

                opacity: 1

            },

            {

                transform: `translateY(-${window.innerHeight + 150}px) translateX(${random(-60,60)}px) rotate(360deg)`,

                opacity: 0

            }

        ],

        {

            duration,

            easing: "linear"

        }

    );

    setTimeout(() => {

        heart.remove();

    }, duration);

}


/* ==========================================================
   HEART MODE
========================================================== */

function startHeartParticles() {

    initializeParticles();

    stopParticles();

    window.secretHeartInterval = setInterval(() => {

        createHeartParticle();

    }, 650);

}


/* ==========================================================
   STOP HEART
========================================================== */

function stopHeartParticles() {

    if (window.secretHeartInterval) {

        clearInterval(window.secretHeartInterval);

    }

}


/* ==========================================================
   RESIZE
========================================================== */

window.addEventListener("resize", () => {

    if (!particleContainer) return;

});


/* ==========================================================
   END
========================================================== */
