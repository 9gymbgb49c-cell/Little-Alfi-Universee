const intro = document.getElementById("intro");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continue");
const finishBtn = document.getElementById("finish");

const yesButtons = document.querySelectorAll(".yes");

const typing = document.getElementById("typing");

const message = `My Dearest Little Alfi ❤️

Congratulations on scoring 452 / 520 (86.92%)!

Maybe today no one celebrated you the way you deserved.

But today...

I want you to know something.

Your marks are beautiful.

Your hard work is beautiful.

But YOU...

are even more beautiful.

I am so proud of the person you are becoming.

Keep smiling.

Keep dreaming.

Keep believing.

Because your future is brighter than every star in this universe.

No matter what happens...

There will always be someone celebrating your victories...

Someone praying for your happiness...

Someone who will always be proud of you.

❤️

Forever Yours,

Baby Aazi`;

startBtn.onclick = () => {
    intro.classList.add("hidden");
    question.classList.remove("hidden");
};

yesButtons.forEach(btn => {
    btn.onclick = () => {
        question.classList.add("hidden");
        celebration.classList.remove("hidden");
    };
});

continueBtn.onclick = () => {
    celebration.classList.add("hidden");
    letter.classList.remove("hidden");
    typeLetter();
};

finishBtn.onclick = () => {
    letter.classList.add("hidden");
    finalPage.classList.remove("hidden");
};

function typeLetter() {
    typing.innerHTML = "";
    let i = 0;
    const speed = 40;

    const interval = setInterval(() => {
        typing.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(interval);
        }
    }, speed);
}

function createStars() {
    const stars = document.getElementById("stars");

    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.width = (Math.random() * 3 + 1) + "px";
        star.style.height = star.style.width;
        star.style.animationDuration = (Math.random() * 4 + 2) + "s";
        stars.appendChild(star);
    }
}

createStars();

function heartRain() {
    const emojis = ["❤️", "💖", "💕", "🌹", "✨"];

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}

heartRain();

function fireworks() {
    const colors = [
        "#ff4da6",
        "#FFD700",
        "#00FFFF",
        "#FFFFFF",
        "#FF0000",
        "#00FF00"
    ];

    setInterval(() => {
        for (let i = 0; i < 25; i++) {
            const f = document.createElement("div");
            f.className = "firework";
            f.style.background = colors[Math.floor(Math.random() * colors.length)];
            f.style.left = Math.random() * 100 + "vw";
            f.style.top = Math.random() * 100 + "vh";

            document.body.appendChild(f);

            setTimeout(() => {
                f.remove();
            }, 1000);
        }
    }, 4000);
}

fireworks();
