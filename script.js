/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');
const appContainer = document.getElementById('app-container');
const buttonsContainer = document.querySelector('.buttons-container');

const funnyMessages = [
    "Don't even try 😏",
    "You can't escape me 😂",
    "It's destiny 💘",
    "You will marry me anyway 😎",
    "No is not an option 😌"
];

function moveNoButton() {
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // Generate random position
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // Apply new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    showFunnyMessage(randomX, randomY);
}

function showFunnyMessage(x, y) {
    const message = document.createElement('div');
    message.className = 'funny-message';
    message.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
    // Position message slightly above the button
    message.style.left = `${x}px`;
    message.style.top = `${y - 40}px`;
    
    document.body.appendChild(message);

    // Remove after animation
    setTimeout(() => {
        message.remove();
    }, 1500);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    // Random size
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random duration
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function handleYesClick() {
    // 1. Replace question
    questionText.textContent = "I love you ❤️😘";
    
    // 2. Add success class for styling
    appContainer.classList.add('success');
    
    // 3. Hide No button
    noBtn.classList.add('hidden');
    
    // 4. Hide Yes button (optional but cleaner)
    yesBtn.classList.add('hidden');

    // 5. Start hearts animation
    const heartInterval = setInterval(createHeart, 200);
    
    // Stop generating hearts after some time if needed, but let's keep it romantic
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 10000);

    // Fade effect
    appContainer.style.transform = 'scale(1.1)';
}

// Event Listeners
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', handleYesClick);

// Handle window resize to keep button inside
window.addEventListener('resize', () => {
    if (noBtn.style.position === 'fixed') {
        moveNoButton();
    }
});
