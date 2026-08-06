"use strict";

/* ==========================================================
   VERIFICATION
========================================================== */

async function showVerificationScreen() {

    const screen = createCard();
    screen.classList.add("verification-screen");

    const title = createTitle("🔒 পরিচয় নিশ্চিত করা হচ্ছে...");

    const status = createParagraph("প্রশ্নগুলোর উত্তর মিলিয়ে দেখা হচ্ছে...");
    status.classList.add("verification-status");

    const progress = createElement("div", {
        className: "verification-progress"
    });

    const bar = createElement("div", {
        className: "verification-bar"
    });

    const percent = createElement("span", {
        className: "verification-percent"
    });
    percent.textContent = "0%";

    progress.append(bar, percent);

    screen.append(
        title,
        status,
        progress
    );

    renderScreen(screen);

    // Each step: [delay before update, status text, target %, extra class for the status line]
    const steps = [
        { wait: 900,  text: "প্রশ্নগুলোর উত্তর মিলিয়ে দেখা হচ্ছে...", pct: 12,  pending: true },
        { wait: 1100, text: "✓ প্রশ্নগুলোর উত্তর মিলেছে।",           pct: 38,  pending: false },
        { wait: 950,  text: "স্মৃতিগুলো যাচাই করা হচ্ছে...",          pct: 60,  pending: true },
        { wait: 1000, text: "✓ স্মৃতিগুলো যাচাই করা হচ্ছে...",        pct: 78,  pending: false },
        { wait: 900,  text: "পরিচয় নিশ্চিত করা হচ্ছে...",             pct: 92,  pending: true },
        { wait: 1000, text: "✓ পরিচয় নিশ্চিত করা হচ্ছে...",           pct: 100, pending: false }
    ];

    for (const step of steps) {
        await delay(step.wait);
        updateVerificationStep(status, bar, percent, step);
    }

    await delay(700);

    showVerificationSuccess();

}

function updateVerificationStep(status, bar, percent, step) {
    status.textContent = step.text;
    status.classList.toggle("is-pending", step.pending);
    status.classList.toggle("is-confirmed", !step.pending);
    bar.style.width = step.pct + "%";
    percent.textContent = step.pct + "%";
}

/* ==========================================================
   VERIFICATION SUCCESS
========================================================== */

async function showVerificationSuccess() {

    const screen = createCard();
    screen.classList.add("verification-success");

    const badge = createElement("div", {
        className: "verification-success-badge"
    });
    badge.textContent = "💚";

    const title = createTitle("💚 পরিচয় নিশ্চিত হয়েছে");

    const text = createParagraph(
`স্বাগতম, বিথী।

এই ওয়েবসাইটের প্রতিটি অংশ,
প্রতিটি শব্দ,
আর প্রতিটি স্মৃতি...

শুধু তোমার জন্য তৈরি করা হয়েছে।`
    );
    text.classList.add("verification-success-text");

    const button = createButton(
        "💌 চিঠি খুলে দেখি",
        () => {
            createLetterScreen();
        }
    );
    button.classList.add("verification-success-button");

    screen.append(
        badge,
        title,
        text,
        button
    );

    renderScreen(screen);

    // Staggered, premium-feeling reveal for each element.
    const reveal = [badge, title, text, button];
    reveal.forEach((el, i) => {
        el.classList.add("reveal-hidden");
        setTimeout(() => {
            el.classList.remove("reveal-hidden");
            el.classList.add("reveal-in");
        }, 120 * i);
    });

}
