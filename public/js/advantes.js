const cards = document.querySelectorAll('.cardFlip-content');
cards.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('is-flipped');
    });
});
