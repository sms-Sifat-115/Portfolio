const words = ["Critical thinker", "Programmer", "Pioneer", "Visionary", "Web developer", "Entrepreneur", "Debater"];
const dynamicText = document.getElementById('randomText');
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let lastWord = '';

function getRandomWord() {
    let newWord;
    do {
        newWord = words[Math.floor(Math.random() * words.length)];
    } while (newWord === lastWord);
    lastWord = newWord;
    return newWord;
}

function getRandomChar() {
    return randomChars[Math.floor(Math.random() * randomChars.length)];
}

function displayRandomChars(word, interval) {
    let currentIndex = 0;
    const randomInterval = setInterval(() => {
        if (currentIndex < word.length) {
            dynamicText.textContent = word.substring(0, currentIndex) + getRandomChar();
            currentIndex++;
        } else {
            clearInterval(randomInterval);
            dynamicText.textContent = word;
        }
    }, interval);
}

function startRandomTextEffect() {
    const word = getRandomWord();
    const randomInterval = Math.floor(Math.random() * 100) + 50; // Random interval between 50ms and 150ms
    displayRandomChars(word, randomInterval);
}

function showInitialDots() {
    dynamicText.classList.add('blinking');
    setTimeout(() => {
        dynamicText.classList.remove('blinking');
        startRandomTextEffect();
        setInterval(startRandomTextEffect, 3000); 
    }, 3000); 
}

showInitialDots();
