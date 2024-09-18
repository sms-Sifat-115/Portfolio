const words = ["Critical thinker", "Programmer", "Leader", "Dreamer", "Web developer"];
const dynamicText = document.getElementById('randomText');
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
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
        setInterval(startRandomTextEffect, 3000); // Change word every 3 seconds
    }, 3000); // Show blinking dots for 3 seconds
}

showInitialDots();
