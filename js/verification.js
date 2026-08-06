"use strict";

/* ==========================================================
   VERIFICATION — PREMIUM EDITION
   Self-contained: injects its own scoped styles once, so it
   drops into the existing site without needing external CSS.
   No Bengali text below was changed from the original file.
========================================================== */

function injectVerificationStyles() {

    if (document.getElementById("verification-premium-styles")) return;

    const style = createElement("style", {
        id: "verification-premium-styles"
    });

    style.textContent = `

    .v-screen {
        position: relative;
        overflow: hidden;
        text-align: center;
        padding: 48px 36px 40px;
        border-radius: 24px;
        background: radial-gradient(120% 140% at 50% 0%, #1b1330 0%, #0d0a1a 55%, #08060f 100%);
        box-shadow:
            0 30px 80px -20px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(255, 255, 255, 0.06) inset,
            0 0 60px rgba(168, 120, 255, 0.08);
        color: #f2eefc;
        font-family: inherit;
        isolation: isolate;
    }

    .v-screen::before {
        content: "";
        position: absolute;
        inset: -40%;
        background:
            radial-gradient(circle at 20% 15%, rgba(255, 130, 190, 0.18), transparent 40%),
            radial-gradient(circle at 80% 85%, rgba(120, 150, 255, 0.16), transparent 45%),
            radial-gradient(circle at 50% 50%, rgba(180, 100, 255, 0.10), transparent 60%);
        animation: v-drift 14s ease-in-out infinite alternate;
        z-index: -1;
        filter: blur(10px);
    }

    @keyframes v-drift {
        0%   { transform: translate(0, 0) scale(1); }
        100% { transform: translate(3%, -2%) scale(1.06); }
    }

    .v-ring-wrap {
        position: relative;
        width: 108px;
        height: 108px;
        margin: 4px auto 22px;
    }

    .v-ring-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
    }

    .v-ring-track {
        fill: none;
        stroke: rgba(255, 255, 255, 0.08);
        stroke-width: 5;
    }

    .v-ring-progress {
        fill: none;
        stroke: url(#v-ring-gradient);
        stroke-width: 5;
        stroke-linecap: round;
        stroke-dasharray: 301.6;
        stroke-dashoffset: 301.6;
        transition: stroke-dashoffset 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        filter: drop-shadow(0 0 6px rgba(200, 140, 255, 0.65));
    }

    .v-ring-icon {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        animation: v-icon-pulse 2.2s ease-in-out infinite;
    }

    @keyframes v-icon-pulse {
        0%, 100% { transform: scale(1); }
        50%      { transform: scale(1.08); }
    }

    .v-title {
        font-size: 21px;
        font-weight: 700;
        letter-spacing: 0.01em;
        margin: 0 0 6px;
        background: linear-gradient(90deg, #ffffff, #d9c8ff 60%, #ffffff);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: v-shimmer 3.5s linear infinite;
    }

    @keyframes v-shimmer {
        to { background-position: -200% center; }
    }

    .v-subtitle {
        font-size: 13px;
        color: rgba(230, 220, 255, 0.55);
        margin: 0 0 26px;
        letter-spacing: 0.02em;
    }

    .v-steps {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        max-width: 340px;
        margin: 0 auto 26px;
    }

    .v-step {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 11px 14px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
        opacity: 0.45;
    }

    .v-step.is-active {
        opacity: 1;
        background: rgba(168, 120, 255, 0.08);
        border-color: rgba(200, 150, 255, 0.25);
        transform: translateX(2px);
    }

    .v-step.is-done {
        opacity: 1;
        background: rgba(90, 230, 160, 0.06);
        border-color: rgba(90, 230, 160, 0.22);
    }

    .v-step-icon {
        flex: none;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.12);
        transition: all 0.4s ease;
    }

    .v-step.is-active .v-step-icon {
        background: conic-gradient(from 0deg, #a878ff, #ff9ecf, #a878ff);
        animation: v-spin 1.1s linear infinite;
        border-color: transparent;
    }

    .v-step.is-done .v-step-icon {
        background: #4ee6a0;
        border-color: transparent;
        color: #08160e;
        animation: v-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes v-spin {
        to { transform: rotate(360deg); }
    }

    @keyframes v-pop {
        0%   { transform: scale(0.4); }
        70%  { transform: scale(1.15); }
        100% { transform: scale(1); }
    }

    .v-step-text {
        font-size: 13.5px;
        color: rgba(240, 235, 255, 0.88);
        line-height: 1.4;
    }

    .v-bottom-bar {
        position: relative;
        height: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        overflow: hidden;
        max-width: 340px;
        margin: 0 auto;
    }

    .v-bottom-fill {
        position: absolute;
        inset: 0;
        width: 0%;
        border-radius: 999px;
        background: linear-gradient(90deg, #a878ff, #ff9ecf, #7ad0ff);
        background-size: 200% 100%;
        animation: v-flow 2.4s linear infinite;
        transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 0 14px rgba(200, 150, 255, 0.6);
    }

    @keyframes v-flow {
        to { background-position: -200% 0; }
    }

    /* ---- success screen ---- */

    .v-success {
        position: relative;
        overflow: hidden;
        text-align: center;
        padding: 52px 36px 44px;
        border-radius: 24px;
        background: radial-gradient(120% 140% at 50% 0%, #17281f 0%, #0b1712 55%, #070d0a 100%);
        box-shadow:
            0 30px 80px -20px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(255, 255, 255, 0.06) inset,
            0 0 70px rgba(90, 230, 160, 0.10);
        color: #f2fbf6;
        isolation: isolate;
    }

    .v-success::before {
        content: "";
        position: absolute;
        inset: -40%;
        background:
            radial-gradient(circle at 25% 20%, rgba(120, 255, 190, 0.16), transparent 40%),
            radial-gradient(circle at 75% 80%, rgba(150, 220, 255, 0.14), transparent 45%);
        animation: v-drift 16s ease-in-out infinite alternate;
        z-index: -1;
        filter: blur(10px);
    }

    .v-success-badge {
        width: 84px;
        height: 84px;
        margin: 0 auto 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        background: radial-gradient(circle at 35% 30%, rgba(120, 255, 190, 0.35), rgba(90, 230, 160, 0.06));
        border: 1px solid rgba(120, 255, 190, 0.35);
        box-shadow: 0 0 40px rgba(90, 230, 160, 0.45);
        animation: v-badge-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes v-badge-in {
        0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    .v-success-title {
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 18px;
        background: linear-gradient(90deg, #ffffff, #b9ffdc 60%, #ffffff);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: v-shimmer 3.5s linear infinite;
    }

    .v-success-text {
        font-size: 15px;
        line-height: 1.85;
        color: rgba(235, 250, 240, 0.88);
        white-space: pre-line;
        max-width: 380px;
        margin: 0 auto 30px;
    }

    .v-success-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 30px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        color: #08160e;
        background: linear-gradient(90deg, #7af0c0, #a8ffde);
        box-shadow: 0 12px 30px -8px rgba(90, 230, 160, 0.55);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .v-success-button:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 16px 38px -8px rgba(90, 230, 160, 0.7);
    }

    .v-success-button:active {
        transform: translateY(0) scale(0.98);
    }

    /* ---- shared reveal ---- */

    .v-reveal {
        opacity: 0;
        transform: translateY(14px);
        transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .v-reveal.v-reveal-in {
        opacity: 1;
        transform: translateY(0);
    }

    /* ---- confetti ---- */

    .v-confetti-piece {
        position: absolute;
        top: -10px;
        border-radius: 2px;
        opacity: 0.9;
        animation: v-confetti-fall linear forwards;
        z-index: 2;
    }

    @keyframes v-confetti-fall {
        to {
            transform: translateY(420px) rotate(540deg);
            opacity: 0;
        }
    }

    @media (max-width: 480px) {
        .v-screen, .v-success { padding: 38px 22px 34px; }
        .v-steps { max-width: 100%; }
    }

    `;

    document.head.appendChild(style);

}

/* ==========================================================
   VERIFICATION
========================================================== */

async function showVerificationScreen() {

    injectVerificationStyles();

    const screen = createCard();
    screen.classList.add("v-screen");

    const title = createTitle("🔒 পরিচয় নিশ্চিত করা হচ্ছে...");
    title.classList.add("v-title");

    const subtitle = createParagraph("প্রশ্নগুলোর উত্তর মিলিয়ে দেখা হচ্ছে...");
    subtitle.classList.add("v-subtitle");

    // Animated scanning ring
    const ringWrap = createElement("div", { className: "v-ring-wrap" });
    ringWrap.innerHTML = `
        <svg class="v-ring-svg" viewBox="0 0 108 108">
            <defs>
                <linearGradient id="v-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#a878ff"/>
                    <stop offset="50%" stop-color="#ff9ecf"/>
                    <stop offset="100%" stop-color="#7ad0ff"/>
                </linearGradient>
            </defs>
            <circle class="v-ring-track" cx="54" cy="54" r="48"></circle>
            <circle class="v-ring-progress" cx="54" cy="54" r="48"></circle>
        </svg>
        <div class="v-ring-icon">🔒</div>
    `;
    const ringProgress = ringWrap.querySelector(".v-ring-progress");
    const ringIcon = ringWrap.querySelector(".v-ring-icon");
    const RING_CIRCUMFERENCE = 301.6;

    // Step checklist
    const stepsWrap = createElement("div", { className: "v-steps" });

    const stepDefs = [
        { icon: "🧩", text: "প্রশ্নগুলোর উত্তর মিলিয়ে দেখা হচ্ছে..." },
        { icon: "🕰️", text: "স্মৃতিগুলো যাচাই করা হচ্ছে..." },
        { icon: "🔐", text: "পরিচয় নিশ্চিত করা হচ্ছে..." }
    ];

    const stepEls = stepDefs.map(def => {
        const row = createElement("div", { className: "v-step" });
        const icon = createElement("div", { className: "v-step-icon" });
        icon.textContent = def.icon;
        const text = createElement("span", { className: "v-step-text" });
        text.textContent = def.text;
        row.append(icon, text);
        return { row, icon, text, def };
    });

    stepEls.forEach(s => stepsWrap.appendChild(s.row));

    // Flowing bottom progress bar
    const bottomBar = createElement("div", { className: "v-bottom-bar" });
    const bottomFill = createElement("div", { className: "v-bottom-fill" });
    bottomBar.appendChild(bottomFill);

    screen.append(
        ringWrap,
        title,
        subtitle,
        stepsWrap,
        bottomBar
    );

    renderScreen(screen);

    function setRing(pct) {
        const offset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * pct) / 100;
        ringProgress.style.strokeDashoffset = offset;
        bottomFill.style.width = pct + "%";
    }

    // Stage 1
    await delay(200);
    stepEls[0].row.classList.add("is-active");
    setRing(8);

    await delay(1000);
    stepEls[0].row.classList.remove("is-active");
    stepEls[0].row.classList.add("is-done");
    stepEls[0].icon.textContent = "✓";
    stepEls[0].text.textContent = "✓ প্রশ্নগুলোর উত্তর মিলেছে।";
    setRing(34);

    // Stage 2
    await delay(400);
    stepEls[1].row.classList.add("is-active");
    subtitle.textContent = "স্মৃতিগুলো যাচাই করা হচ্ছে...";
    ringIcon.textContent = "🕰️";
    setRing(48);

    await delay(1050);
    stepEls[1].row.classList.remove("is-active");
    stepEls[1].row.classList.add("is-done");
    stepEls[1].icon.textContent = "✓";
    stepEls[1].text.textContent = "✓ স্মৃতিগুলো যাচাই করা হচ্ছে...";
    setRing(70);

    // Stage 3
    await delay(400);
    stepEls[2].row.classList.add("is-active");
    subtitle.textContent = "পরিচয় নিশ্চিত করা হচ্ছে...";
    ringIcon.textContent = "🔐";
    setRing(84);

    await delay(1050);
    stepEls[2].row.classList.remove("is-active");
    stepEls[2].row.classList.add("is-done");
    stepEls[2].icon.textContent = "✓";
    stepEls[2].text.textContent = "✓ পরিচয় নিশ্চিত করা হচ্ছে...";
    subtitle.textContent = "✓ পরিচয় নিশ্চিত করা হচ্ছে...";
    ringIcon.textContent = "💚";
    setRing(100);

    await delay(900);

    showVerificationSuccess();

}

/* ==========================================================
   VERIFICATION SUCCESS
========================================================== */

async function showVerificationSuccess() {

    injectVerificationStyles();

    const screen = createCard();
    screen.classList.add("v-success");

    const badge = createElement("div", { className: "v-success-badge v-reveal" });
    badge.textContent = "💚";

    const title = createTitle("💚 পরিচয় নিশ্চিত হয়েছে");
    title.classList.add("v-success-title", "v-reveal");

    const text = createParagraph(
`স্বাগতম, বিথী।

এই ওয়েবসাইটের প্রতিটি অংশ,
প্রতিটি শব্দ,
আর প্রতিটি স্মৃতি...

শুধু তোমার জন্য তৈরি করা হয়েছে।`
    );
    text.classList.add("v-success-text", "v-reveal");

    const button = createButton(
        "💌 চিঠি খুলে দেখি",
        () => {
            createLetterScreen();
        }
    );
    button.classList.add("v-success-button", "v-reveal");

    screen.append(
        badge,
        title,
        text,
        button
    );

    renderScreen(screen);

    spawnConfetti(screen);

    const revealEls = [badge, title, text, button];
    revealEls.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("v-reveal-in");
        }, 130 * i + 80);
    });

}

/* ==========================================================
   LIGHTWEIGHT CONFETTI BURST (pure CSS/DOM, no dependencies)
========================================================== */

function spawnConfetti(container) {

    const colors = ["#7af0c0", "#a878ff", "#ff9ecf", "#7ad0ff", "#ffe08a"];
    const pieceCount = 26;

    for (let i = 0; i < pieceCount; i++) {
        const piece = createElement("div", { className: "v-confetti-piece" });
        const size = 5 + Math.random() * 6;
        const left = Math.random() * 100;
        const duration = 1.8 + Math.random() * 1.4;
        const delaySec = Math.random() * 0.4;
        const color = colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = left + "%";
        piece.style.width = size + "px";
        piece.style.height = size * 0.4 + "px";
        piece.style.background = color;
        piece.style.animationDuration = duration + "s";
        piece.style.animationDelay = delaySec + "s";

        container.appendChild(piece);

        setTimeout(() => piece.remove(), (duration + delaySec) * 1000 + 200);
    }

}
