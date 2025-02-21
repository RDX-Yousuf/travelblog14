// Dark Mode Toggle Functionality
const toggle = document.getElementById('toggle-dark-mode');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Enable dark mode
        document.body.classList.add('dark-mode');
    } else {
        // Disable dark mode
        document.body.classList.remove('dark-mode');
    }
});
