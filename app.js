// Random Text Effect
const words = ["Web developer", "Future Global Leader", "Programmer", "Citizen Scientist", "Avid Learner", "Global Youth Ambassador", "Critical thinker", "Entrepreneur", "Software Engineer", "Debater", "Team Player", "Visionary"];
const dynamicText = document.getElementById('randomText');
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let currentWordIndex = 0;

function getNextWord() {
    const word = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
    return word;
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
    const word = getNextWord();
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



/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// Mouse Pointer Effect
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    const hero = document.querySelector('.hero');
    const heroRect = hero.getBoundingClientRect();

    if (
        e.clientX >= heroRect.left &&
        e.clientX <= heroRect.right &&
        e.clientY >= heroRect.top &&
        e.clientY <= heroRect.bottom
    ) {
        blob.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
        blob.style.opacity = 1;
    } else {
        blob.style.opacity = 0;
    }
});

document.addEventListener('mouseout', () => {
    const blob = document.querySelector('.blob');
    blob.style.opacity = 0;
});

