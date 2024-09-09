document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const experienceSection = document.querySelector('.exp');

    function toggleButtonVisibility() {
        const experienceSectionTop = experienceSection.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= experienceSectionTop) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', toggleButtonVisibility);

    // Initial check in case the user starts at a scrolled position
    toggleButtonVisibility();
});


