// Array of random words
const words = [
    "کالسکه", "کریر", "تخت نوزاد", "گهواره", "صندلی ماشین", "شیشه شیر", "پستانک", "پوشک", "دستمال مرطوب", "وان حمام نوزاد", "لباس نوزاد", "سرهمی", "پتو نوزاد", "تشک تعویض", "کیف پوشک", "حوله نوزاد", "بالش شیردهی", "تشک گهواره", "سرویس خواب نوزاد", "شانه و برس", "ناخن‌گیر کودک", "شیر دوش", "استریلایزر شیشه شیر", "قمقمه", "ظروف غذاخوری", "دندان‌گیر", "پیشبند", "صندلی غذاخوری", "عروسک", "اسباب‌بازی", "جغجغه", "آویز تخت", "مانیتور کودک", "بالش نوزاد", "پشه‌بند", "پودر بچه", "کرم سوختگی", "لوسیون کودک", "روغن بدن نوزاد", "شیشه‌شور", "صابون کودک", "شامپو نوزاد", "چراغ خواب کودک", "پتو دورپیچ", "ساک حمل نوزاد", "بادی نوزاد", "زیرانداز تعویض", "کاور شیردهی","کلاه‌قرمزی و پسرخاله", "ننه سرما", "قصه‌های خوب برای بچه‌های خوب", "عموپورنگ", "بز زنگوله‌پا", "شنگول و منگول", "پسر بچه‌های آسمانی", "داستان‌های شاهنامه", "باغ وحش", "بچه‌های دهکده", "ملانصرالدین", "ماجراهای تام‌سایر", "گنجشکک اشی‌مشی", "قصه‌های هزار و یک شب", "پینوکیو", "داستان‌های شگفت‌انگیز", "سفر به دنیاهای مختلف", "کوکی و دوستان", "عصر یخبندان", "قصه‌های به یاد ماندنی", "ماجراهای سیندرلا", "پیشی‌موی سفید", "خرگوش و لاک‌پشت","پزشک", "مهندس", "معلم", "وکیل", "پرستار", "خلبان", "آتش‌نشان", "پلیس", "کارگر", "نجار", "راننده", "نقاش", "آشپز", "قصاب", "نانوا", "آرایشگر", "مکانیک", "بنا", "کفاش", "کشاورز", "برق‌کار", "لوله‌کش", "فروشنده", "حسابدار", "داروساز", "زیست‌شناس", "فیزیکدان", "شیمی‌دان", "دندانپزشک", "گرافیست", "عکاس", "برنامه‌نویس", "طراح وب", "تحلیل‌گر داده", "معمار", "کارشناس بیمه", "کارشناس مالی", "مددکار اجتماعی", "هنرمند", "مترجم", "روزنامه‌نگار", "خبرنگار", "نویسنده", "خیاط", "مدیر", "کارگردان", "تهیه‌کننده", "صداگذار", "مربی", "ورزشکار", "بازیگر", "نقشه‌بردار", "عقیدتی", "مداح", "مشاور", "روانشناس", "جامعه‌شناس", "کتابدار", "دکتر دامپزشک", "مهندس نرم‌افزار", "مهندس عمران", "مهندس برق", "مهندس مکانیک", "تکنسین", "جوشکار", "جواهرساز", "طلافروش", "پیک موتوری", "کارشناس روابط عمومی", "امدادگر", "کارشناس آزمایشگاه", "دستیار دندانپزشک", "قصه‌گو", "مسئول خرید", "مسئول فروش", "بازاریاب", "کارشناس ارشد", "مدیر اجرایی", "تحلیل‌گر مالی", "بانکدار", "کارگر کارخانه", "متخصص امنیت شبکه", "تحلیل‌گر امنیت اطلاعات", "نصاب", "گچ‌کار", "برشکار", "کاشی‌کار", "صندوق‌دار", "کتابفروش", "مأمور پست", "مأمور آمار", "کارگر معدن", "کارشناس منابع انسانی", "نویسنده فیلمنامه", "تحلیل‌گر کسب‌وکار", "طراح لباس", "انیماتور", "ماساژور", "مسئول پذیرش", "مربی یوگا"
];

const wordTwo = [];

// Game variables
let points = 0;
let timeLeft = 60; // Countdown starts from 60 seconds
let timerInterval = null;
let gameStarted = false;
let confettiInterval = null; // For repeating confetti explosion

// Elements
const pointsDisplay = document.getElementById('points');
const wordDisplay = document.getElementById('word');
const greenButton = document.getElementById('greenButton');
const yellowButton = document.getElementById('yellowButton');
const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const wordCloud = document.getElementById('wordCloud');
const gameOverMessage = document.getElementById('gameOverMessage');

// Function to pick a random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
function righWord() {
    const randomWord = getRandomWord();
    wordDisplay.textContent = randomWord;
    words.filter(item => item !== randomWord);
    // words.splice(randomIndex, 1);
}
// Function to update the word
function updateWord() {
    const randomWord = getRandomWord();
    wordDisplay.textContent = randomWord;
}


// Function to update the points
function addPoint() {
    points++;
    pointsDisplay.textContent = `Points: ${points}`;
    righWord();

}

// Function to add words to the background (word cloud)
function createWordCloud() {
    for (let i = 0; i < 200; i++) {
        const wordElement = document.createElement('span');
        wordElement.textContent = getRandomWord();
        wordElement.style.left = `${Math.random() * 100}vw`;
        wordElement.style.top = `${Math.random() * 100}vh`;
        wordCloud.appendChild(wordElement);
    }
}

// Function to handle keyboard events for Enter and Space keys
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        greenButton.click(); // Simulate a click on the green button
    } else if (event.key === ' ') {
        event.preventDefault(); // Prevent scrolling when pressing space
        yellowButton.click(); // Simulate a click on the yellow button
    }
});

// Function to start the game
function startGame() {
    if (gameStarted) return; // Prevent multiple starts

    gameStarted = true;
    points = 0;
    timeLeft = 60;
    pointsDisplay.textContent = `Points: ${points}`;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    greenButton.disabled = false;
    yellowButton.disabled = false;
    startButton.disabled = true;

    wordDisplay.style.display = "block";
    gameOverMessage.style.display = "none";

    updateWord();
    startTimer();
}

// Function to handle the countdown timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Function to trigger random confetti explosions
function triggerConfetti() {
    const confettiSettings = {
        particleCount: 500,
        spread: 100,
        startVelocity: 60,
        origin: {
            x: Math.random(), // Random x position
            y: Math.random() * 0.6 // Random y position, limited to the upper 60% of the screen
        }
    };
    confetti(confettiSettings);
}

// Function to start a sequence of confetti explosions
function startConfettiSequence() {
    confettiInterval = setInterval(triggerConfetti, 500); // Trigger confetti every 0.5 seconds
    setTimeout(stopConfettiSequence, 20000); // Stop confetti after 5 seconds
}

// Function to stop the confetti sequence
function stopConfettiSequence() {
    clearInterval(confettiInterval);
}

// Function to end the game
function endGame() {
    greenButton.disabled = true;
    yellowButton.disabled = true;
    startButton.disabled = false;
    wordDisplay.style.display = "none";
    gameOverMessage.style.display = "block";
    gameOverMessage.textContent = `وقت تمام شد! امتیاز شما: ${points}`;

    // Trigger the confetti explosion sequence
    startConfettiSequence();
}

// Button event listeners
greenButton.addEventListener('click', addPoint);
yellowButton.addEventListener('click', updateWord);
startButton.addEventListener('click', startGame);

// Create word cloud when the page loads
createWordCloud();


// sidebar scripts

const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleSidebar");
const submitFormButton = document.getElementById("submitForm");

toggleButton.addEventListener("click", () => {
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "500px";
    } else {
        sidebar.style.width = "0px";
    }
});

submitFormButton.addEventListener("click", async () => {
    const apiKey = document.getElementById("apiKey").value.trim();
    const prompt = document.getElementById("prompt").value.trim();
    const responseTextarea = document.getElementById("apiResponse");

    if (!apiKey || !prompt) {
        alert("لطفاً کلید API و پرامپت را وارد کنید.");
        return;
    }

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 50,
            }),
        });

        const data = await response.json();
        responseTextarea.value = data.choices[0].text.trim();
    } catch (error) {
        responseTextarea.value = "خطایی رخ داد: " + error.message;
    }
});

const closeButton = document.getElementById("closeSidebar");

closeButton.addEventListener("click", () => {
    sidebar.style.width = "0px";
});


// AI
submitFormButton.addEventListener("click", async () => {
    const apiKey = document.getElementById("apiKey").value.trim(); // دریافت کلید API
    const prompt = document.getElementById("prompt").value.trim(); // دریافت پرامپت
    const responseTextarea = document.getElementById("apiResponse"); // نمایش پاسخ

    if (!apiKey || !prompt) {
        alert("لطفاً کلید API و پرامپت را وارد کنید.");
        return;
    }

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 50,
            }),
        });

        if (!response.ok) {
            throw new Error(`خطای API: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // لاگ کردن داده کامل پاسخ

        if (data.choices && data.choices[0] && data.choices[0].text) {
            responseTextarea.value = data.choices[0].text.trim();
        } else {
            responseTextarea.value = "خطا: پاسخ معتبر از API دریافت نشد.";
        }
    } catch (error) {
        responseTextarea.value = "خطا: " + error.message;
    }

});
