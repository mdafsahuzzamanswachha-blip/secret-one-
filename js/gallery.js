"use strict";

/* ==========================================================
   SECRET ONE
   Gallery Controller
========================================================== */

let galleryIndex = 0;

/* ==========================================================
   SHOW GALLERY
========================================================== */

function showGalleryScreen() {

    galleryIndex = 0;

    renderGallery();

}


/* ==========================================================
   RENDER
========================================================== */

function renderGallery() {

    const screen = createCard();

    const title = createTitle(" 🌿 কিছু ছবি, অনেক গল্প");

    const image = createElement("img", {
        src: CONFIG.gallery[galleryIndex].image
    });

    image.className = "gallery-image";

    image.style.width = "100%";
    image.style.borderRadius = "20px";
    image.style.objectFit = "cover";
    image.style.margin = "15px 0";

    image.classList.add("fade-out");

    setTimeout(() => {

    image.classList.remove("fade-out");

    image.classList.add("fade-in");

    }, 30);

    const caption = createParagraph(
        CONFIG.gallery[galleryIndex].caption
    );

    caption.className = "gallery-caption";

    const counter = createParagraph(
        `${galleryIndex + 1} / ${CONFIG.gallery.length}`
    );

    const controls = createElement("div");

    controls.style.display = "flex";
    controls.style.gap = "12px";
    controls.style.width = "100%";

    const previousButton = createButton(
        "⬅ আগেরটি",
        previousImage
    );

    const nextButton = createButton(

        galleryIndex === CONFIG.gallery.length - 1
            ? "✨ এখনও একটা বাকি আছে..."
            : "পরেরটি ➜",

        () => {

            if (galleryIndex === CONFIG.gallery.length - 1) {

                showFinalEnding();
                return;

            }

            nextImage();

        }

    );

    controls.append(
        previousButton,
        nextButton
    );

    if (galleryIndex === 0) {

        previousButton.disabled = true;

    }

    screen.append(
        title,
        image,
        caption,
        counter,
        controls
    );

    renderScreen(screen);

}

/* ==========================================================
   NEXT IMAGE
========================================================== */

function nextImage() {

    if (

        galleryIndex <

        CONFIG.gallery.length - 1

    ) {

        galleryIndex++;

    }

    renderGallery();

}


/* ==========================================================
   PREVIOUS IMAGE
========================================================== */

function previousImage() {

    if (galleryIndex > 0) {

        galleryIndex--;

    }

    renderGallery();

}


/* ==========================================================
   OPEN IMAGE
========================================================== */

function openImage(index) {

    if (

        index < 0 ||

        index >= CONFIG.gallery.length

    ) return;

    galleryIndex = index;

    renderGallery();

}


/* ==========================================================
   AUTO PLAY (OPTIONAL)
========================================================== */

let galleryTimer = null;

function startGalleryAutoPlay(interval = 4000) {

    stopGalleryAutoPlay();

    galleryTimer = setInterval(() => {

        if (

            galleryIndex >=

            CONFIG.gallery.length - 1

        ) {

            stopGalleryAutoPlay();

            return;

        }

        nextImage();

    }, interval);

}


function stopGalleryAutoPlay() {

    if (galleryTimer) {

        clearInterval(galleryTimer);

        galleryTimer = null;

    }

}


/* ==========================================================
   END
========================================================== */
