const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    alert('Yay! I am so excited! I wanna meet you, I am so happy❤️🫶');
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton(e) {
    const maxX = window.innerWidth - e.target.offsetWidth;
    const maxY = window.innerHeight - e.target.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    e.target.style.position = 'fixed';
    e.target.style.left = randomX + 'px';
    e.target.style.top = randomY + 'px';
}

noBtn.addEventListener('click', () => {
    noBtn.textContent = 'Yes';
    noBtn.style.backgroundColor = 'var(--yes-color)';
    alert('Great choice! Looking forward to our date!');
});