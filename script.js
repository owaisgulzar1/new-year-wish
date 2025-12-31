const bgMusic = document.getElementById("bgMusic");
const submitButton = document.getElementById("submitName");
const resetButton = document.getElementById("resetButton");
const userNameInput = document.getElementById("userName");
const quoteElement = document.getElementById("quote");
const overlay = document.getElementById("overlay");

const quotes = [
    "✨ {name}, may your year sparkle with joy and success! ✨",
    "💫 {name}, 365 days of happiness, adventures, and dreams await! 💫",
    "🎆 {name}, let your life sparkle like fireworks tonight! 🎆",
    "🌈 {name}, make memories that leave footprints in your heart! 🌈",
    "💖 {name}, dare to live your best life this year! 💖",
    "🌟 {name}, let every day shine brighter than the last! 🌟",
    "🎉 {name}, cheers to laughter, love, and endless joy! 🎉",
    "🚀 {name}, reach new heights and conquer your dreams! 🚀",
    "💌 {name}, may happiness and success follow you everywhere! 💌",
    "🌠 {name}, make this year your most magical yet! 🌠"
];

const neonColors = ["#00ffea", "#ff00ff", "#00ff00", "#ff0000", "#ffff00", "#00ffff", "#ff66ff", "#ff9900"];

submitButton.addEventListener("click", () => {
    const name = userNameInput.value.trim() || "Friend";
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex].replace("{name}", name);

    overlay.classList.add("cinematic");

    setTimeout(() => {
        overlay.classList.remove("cinematic");
        quoteElement.textContent = quote;

        const color = neonColors[Math.floor(Math.random() * neonColors.length)];
        quoteElement.style.color = color;
        quoteElement.style.textShadow = '0 0 5px $ {color}, 0 0 15px ${color}, 0 0 25px $ {color}';
        quoteElement.classList.add("show");

        // Play background music from 2 minutes
        bgMusic.currentTime = 120; // 2 minutes
        bgMusic.play().catch(err => console.log("Audio blocked:", err));
    }, 1000);
});

resetButton.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    quoteElement.textContent = "";
    quoteElement.classList.remove("show");
    userNameInput.value = "";
    overlay.classList.remove("cinematic");
});