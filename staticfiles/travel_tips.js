document.addEventListener("DOMContentLoaded", function () {
    // Open Modal Function
    function openTipModal(tipId) {
        const modal = document.getElementById('tip-modal-' + tipId);
        const overlay = document.getElementById('overlay');
        if (modal) {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }
    }

    // Close Modal Function
    function closeTipModal(tipId) {
        const modal = document.getElementById('tip-modal-' + tipId);
        const overlay = document.getElementById('overlay');
        if (modal) {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

    // Close All Modals when overlay is clicked
    function closeAllTipModals() {
        const modals = document.querySelectorAll('.tip-modal');
        const overlay = document.getElementById('overlay');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        overlay.style.display = 'none';
    }

    // Attach event listeners to all tip cards
    document.querySelectorAll('.tip-card').forEach(card => {
        card.addEventListener('click', function () {
            const tipId = this.getAttribute('data-tip-id');
            openTipModal(tipId);  
        });
    });

    // Close modals when clicking the overlay
    document.getElementById('overlay').addEventListener('click', closeAllTipModals);
});

// Theme toggle functionality
const themeToggleCheckbox = document.getElementById('theme-toggle');

themeToggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', themeToggleCheckbox.checked);
});
