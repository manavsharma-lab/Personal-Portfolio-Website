
// Wait until the HTML document is loaded
document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       1. LIGHT / DARK MODE
    ================================= */

    const themeToggle = document.getElementById("theme-toggle");

    // Get saved theme or use dark theme by default
    let currentTheme = localStorage.getItem("portfolio-theme");

    if (currentTheme !== "light" && currentTheme !== "dark") {
        currentTheme = "dark";
    }

    // Apply selected theme
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        if (themeToggle) {
            if (theme === "dark") {
                themeToggle.textContent = "☀️ Light Mode";
                themeToggle.setAttribute("aria-label", "Switch to light theme");
            } else {
                themeToggle.textContent = "🌙 Dark Mode";
                themeToggle.setAttribute("aria-label", "Switch to dark theme");
            }
        }
    }

    // Apply theme when page loads
    applyTheme(currentTheme);

    // Switch theme on button click
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            currentTheme = currentTheme === "dark" ? "light" : "dark";

            // Save theme preference
            localStorage.setItem("portfolio-theme", currentTheme);

            // Update website theme
            applyTheme(currentTheme);
        });
    }

    /* =================================
       2. CONTACT FORM VALIDATION
    ================================= */

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const status = document.getElementById("form-status");

            // Check empty fields
            if (!name || !email || !subject || !message) {
                status.textContent = "Please fill in all fields.";
                return;
            }

            // Display success message
            status.textContent =
                "Thank you, " + name +
                "! Your form has been validated successfully.";

            // Clear form fields
            contactForm.reset();
        });
    }

});
