// Simple scroll-based animation for goal cards
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.goal-card');
    const scrollY = window.scrollY;
    
    cards.forEach((card, index) => {
        if (scrollY > index * 150) {
            card.style.transform = 'scale(1.1)';
        } else {
            card.style.transform = 'scale(1)';
        }
    });
});
