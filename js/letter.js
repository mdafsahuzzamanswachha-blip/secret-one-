"use strict";

/* ==========================================================
   LETTER
========================================================== */

const LETTER_TEXT = `প্রিয় বিথী,

শুভ জন্মদিন। 🎂💚

জন্মদিনে তোকে সবাই শুভেচ্ছা জানাবে। কেউ একটা মেসেজ লিখবে, কেউ একটা ছবি পাঠাবে, কেউ আবার স্টোরি দেবে। কিন্তু আমি ভাবলাম, তোর জন্য একটু অন্যরকম কিছু করি। তাই এই ছোট্ট জিনিসটা বানালাম। আশা করি এটা দেখে তোর মুখে একটা হাসি আসবে।

ভাবতে অবাক লাগে, ২০২৩ সালে শুরু হওয়া আমাদের বন্ধুত্বটা আজ এতটা সুন্দর হয়ে গেছে। তখন যদি কেউ বলত, একটা মানুষ আমার জীবনের এত বড় একটা অংশ হয়ে যাবে, তাহলে হয়তো বিশ্বাসই করতাম না।

আমাদের কত কথা হয়! এমন দিন খুব কমই গেছে যেদিন আমরা কথা বলিনি। কখনো সারাদিন গল্প, কখনো সারারাত জেগে আড্ডা। একটা বিষয় শেষ হতে না হতেই আরেকটা শুরু। কোনোদিন সিরিয়াস আলোচনা, কোনোদিন একদম আজগুবি কথা। কোনো কারণই নেই, তবুও শুধু কথা বলেই ঘণ্টার পর ঘণ্টা কেটে গেছে।

অবশ্য রাগারাগিও কম হয়নি। কখনো তুই রাগ করেছিস, কখনো আমি। কখনো তর্ক হয়েছে, কখনো অভিমান হয়েছে। কিন্তু মজার ব্যাপার হলো, শেষ পর্যন্ত আবার কথা হয়েছে, আবার হাসাহাসি হয়েছে। মনে হয় আমাদের বন্ধুত্বে রাগও একটা আলাদা চরিত্র। আসে, একটু নাটক করে, তারপর আবার চুপচাপ চলে যায়। 😄

সত্যি বলতে, তুই এমন একজন মানুষ, যার সাথে কথা বলতে কখনো বিরক্ত লাগে না। বরং যত কথা হয়, মনে হয় আরও একটু কথা বলা যেত।

আজ তোর জন্মদিন। তাই মন থেকে শুধু একটা কথাই বলতে চাই...

সৃষ্টিকর্তা যেন তোকে সবসময় ভালো রাখেন, সুস্থ রাখেন। তোর জীবনের প্রতিটা স্বপ্ন যেন একদিন সত্যি হয়। তুই সবসময় এমনই হাসিখুশি থাকিস, কারণ তোর হাসিটা সত্যিই অনেক সুন্দর।

আর একটা কথা...

যতই আমার সাথে ঝগড়া করিস, যতই রাগ দেখাস, শেষ পর্যন্ত কিন্তু আমাকে ছাড়া তোর চলবে না... আর তোরে ছাড়া আমারও না। 😌💚

🎉 শুভ জন্মদিন, বিথি।

আজকের পুরো দিনটা হাসি, আনন্দ আর অনেক অনেক সুন্দর মুহূর্তে ভরে থাকুক।

ভালো থাকিস।

আর হ্যাঁ...

এভাবেই সারাজীবন আমাকে বিরক্ত করিস। 💚`;

function createLetterScreen() {

    const screen = createCard();

    screen.classList.add("letter-screen");

    const title = createElement("h2", {
        text: "💌 তোর জন্য একটা চিঠি..."
    });

    title.className = "letter-title";

    const letter = createElement("div");
    letter.id = "letterBox";
    letter.className = "letter-box";

    const button = createButton(
        "📸 এবার কিছু স্মৃতি দেখা যাক",
        () => {
            createGalleryScreen();
        }
    );

    button.id = "letterNext";
    button.style.display = "none";

    screen.append(
        title,
        letter,
        button
    );

    renderScreen(screen);

    startLetterTyping();

}

/* ==========================================================
   LETTER TYPING
========================================================== */

async function startLetterTyping() {

    const box = document.getElementById("letterBox");
    const button = document.getElementById("letterNext");

    box.innerHTML = "";

    await delay(1200);

    let content = "";

    for (let i = 0; i < LETTER_TEXT.length; i++) {

        const char = LETTER_TEXT[i];

        if (char === "\n") {

            content += "<br>";

        } else {

            content += char;

        }

        box.innerHTML = content + '<span id="cursor">|</span>';

        box.scrollTop = box.scrollHeight;

        await delay(getTypingSpeed(char));

    }

    box.innerHTML = content;

    button.style.display = "block";
    button.classList.add("fade-in");

}

/* ==========================================================
   TYPING SPEED
========================================================== */

function getTypingSpeed(char) {

    if (char === ".") return 180;

    if (char === ",") return 120;

    if (char === "।") return 220;

    if (char === "\n") return 350;

    if (char === "!") return 220;

    if (char === "?") return 220;

    return 28;

}

/* ==========================================================
   CURSOR
========================================================== */

setInterval(() => {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    cursor.style.opacity =
        cursor.style.opacity === "0"
            ? "1"
            : "0";

}, 500);
