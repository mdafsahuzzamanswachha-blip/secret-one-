"use strict";

/* ==========================================================
   VERIFICATION
========================================================== */

async function showVerificationScreen() {

    const screen = createCard();

    const title = createTitle("🔒 পরিচয় নিশ্চিত করা হচ্ছে...");

    const status = createParagraph("🔍 স্মৃতির সাথে মিলিয়ে দেখা হচ্ছে...");

    const percent = createParagraph("0%");
    percent.className = "verification-percent";

    const progress = createElement("div", {
        className: "verification-progress"
    });

    const bar = createElement("div", {
        className: "verification-bar"
    });

    progress.appendChild(bar);

    screen.append(
        title,
        status,
        progress,
        percent
    );

    renderScreen(screen);

    /* ---------- STEP 1 ---------- */

    await delay(1000);

    status.textContent = "✓ প্রশ্নগুলোর উত্তর মিলেছে";
    bar.style.width = "33%";
    percent.textContent = "33%";

    /* ---------- STEP 2 ---------- */

    await delay(1100);

    status.textContent = "🧠 স্মৃতিগুলো যাচাই করা হচ্ছে...";
    bar.style.width = "66%";
    percent.textContent = "66%";

    /* ---------- STEP 3 ---------- */

    await delay(1100);

    status.textContent = "💚 পরিচয় নিশ্চিত করা হচ্ছে...";
    bar.style.width = "100%";
    percent.textContent = "100%";

    await delay(1200);

    showVerificationSuccess();

}

/* ==========================================================
   VERIFICATION SUCCESS
========================================================== */

async function showVerificationSuccess() {

    const screen = createCard();

    const title = createTitle("💚 পরিচয় নিশ্চিত হয়েছে");

    const text = createParagraph(
`স্বাগতম, বিথী।

এই ওয়েবসাইটের প্রতিটি অংশ,
প্রতিটি শব্দ,
আর প্রতিটি স্মৃতি...

শুধু তোমার জন্য তৈরি করা হয়েছে।`
    );

    const button = createButton(

        "💌 চিঠি খুলে দেখি",

        () => {

            createLetterScreen();

        }

    );

    screen.append(

        title,
        text,
        button

    );

    renderScreen(screen);

}
