function handleYes() {
    createConfetti();
    showModal();
}

function handleNo() {
    // El botón "No" se mueve cuando se intenta hacer click
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#e91e63', '#667eea', '#764ba2', '#f06292', '#ab47bc', '#ec407a'];
    
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animation = `fall ${2 + Math.random() * 1}s linear forwards`;
        confettiPiece.style.delay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(confettiPiece);
        
        setTimeout(() => {
            confettiPiece.remove();
        }, 3500);
    }
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer click fuera
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});
