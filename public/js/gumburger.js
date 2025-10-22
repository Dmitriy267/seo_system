let hamburger = document.querySelector('.gumburger');
let nav = document.querySelector('.header__navigation');

hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});

const panel = document.querySelector('.panel');
const ul = document.querySelector('.menu__header_bottom .menu__link');

panel.addEventListener('click', function (e) {
    e.stopPropagation();
    ul.classList.toggle('active-panel');
});

document.addEventListener('click', function (e) {
    if (!ul.contains(e.target)) {
        ul.classList.remove('active-panel');
    }
});
