// Fade-in effect on scroll for cards and projects
document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fadein');
    function fadeInOnScroll() {
        const trigger = window.innerHeight * 0.93;
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < trigger) el.style.opacity = 1;
        });
    }
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});
