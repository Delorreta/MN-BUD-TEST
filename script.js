 new WOW().init();
        document.querySelectorAll('.mh-progress-circle').forEach(function(el) {
            const progress = el.getAttribute('data-progress');
            el.style.setProperty('--progress', progress);
            el.textContent = progress + '%';
            });
        // JavaScript для керування каруселлю
const carousel = document.querySelector('.testimonial-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navList.classList.toggle('nav-active');
    });
});
