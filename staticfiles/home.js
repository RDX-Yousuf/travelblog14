// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
