document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle-dark-mode");
    const body = document.body;

    // Check if user has a preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});


// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Preserve Theme on Reload
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
});

function openModal(placeId) {
    document.getElementById(`modal-${placeId}`).style.display = 'block';
    document.getElementById("overlay").style.display = "block";
}

function closeModal(placeId) {
    document.getElementById(`modal-${placeId}`).style.display = 'none';
    document.getElementById("overlay").style.display = "none";
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = "none";
    });
    document.getElementById("overlay").style.display = "none";
}


function openPopup(description) {
    const popup = document.querySelector(".popup");
    document.getElementById("place-description").textContent = description;
    popup.classList.remove("hidden");

    // Apply dark mode if enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        popup.classList.add("dark-mode");
    }
}

function closePopup() {
    document.querySelector(".popup").classList.add("hidden");
}

