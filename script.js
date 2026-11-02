
// Wait until the HTML document is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the contact form
    const contactForm = document.getElementById("contact-form");

    // Run only if contact form exists on the current page
    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Get status message element
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
