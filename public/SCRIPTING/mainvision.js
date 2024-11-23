

// Scroll-triggered animations for the cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.vision-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 50) {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }
    });
});
