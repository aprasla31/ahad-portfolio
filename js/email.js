document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form"),
        contactName = document.querySelector('[name="from_name"]'),
        contactEmail = document.querySelector('[name="from_email"]'),
        contactPhone = document.querySelector('[name="phone_number"]'),
        contactSubject = document.querySelector('[name="subject"]'),
        contactMessage = document.getElementById("message");

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!contactName.value || !contactEmail.value || !contactPhone.value || !contactSubject.value || !contactMessage.value) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }

        // Send email using EmailJS
        emailjs
            .sendForm("service_755rih8", "template_a0xny5s", "#contact-form", "HZA8n6ONWHJmdeBPU")
            .then(() => {
                alert("✅ Message sent successfully!");
                contactForm.reset(); // Clear form after success
            })
            .catch((error) => {
                alert("❌ Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    };

    // Add event listener
    if (contactForm) {
        contactForm.addEventListener("submit", sendEmail);
    }
});
