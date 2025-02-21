// Toggle Dark/Light Mode (if included in the navbar)
const toggle = document.getElementById('toggle-dark-mode');
const body = document.body;

// Check for saved theme preference in local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
} else {
    body.classList.remove('dark-mode');
    toggle.checked = false;
}

// Event listener to toggle theme
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Modal Functionality (Optional: If you want modals for destination details)
// If you decide to open a modal when clicking a destination, here's how you could set it up:

// Function to open modal
function openModal(destinationId) {
    const modal = document.getElementById(`modal-${destinationId}`);
    const overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close modal
function closeModal(destinationId) {
    const modal = document.getElementById(`modal-${destinationId}`);
    const overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Close all modals when overlay is clicked
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('overlay');
    modals.forEach(modal => modal.style.display = 'none');
    overlay.style.display = 'none';
}

// Event listener to close all modals when overlay is clicked
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', closeAllModals);

// For any destination card click event, if modal functionality is implemented
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    card.addEventListener('click', () => {
        const destinationId = card.getAttribute('data-destination-id');
        openModal(destinationId);
    });
});
