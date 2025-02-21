document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle Function
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for stored theme preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Add event listener to the theme toggle checkbox
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Open Modal Function
    function openModal(imgElement) {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("modalImage");
        const modalDescription = document.getElementById("modalDescription");

        // Set the modal image and description
        modalImg.src = imgElement.src;
        modalDescription.innerHTML = imgElement.nextElementSibling.nextElementSibling.innerHTML;  // Getting description

        // Display the modal
        modal.style.display = "flex";
    }

    // Close Modal Function
    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // Close the modal when clicking on the close button (×)
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
            closeModal();
        }
    });

    // Optional: Add a key listener to close modal using the ESC key
    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});
