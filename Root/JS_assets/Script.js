// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    /* GLOBAL: Mobile Navigation Hamburger Menu Toggle*/
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    // Automatically close the mobile menu when a navigation link is clicked
    if (navToggle && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navToggle.checked = false;
            });
        });
    }

    /* SERVICES PAGE: Dynamic Service Filtering*/
    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceCategories = document.querySelectorAll(".service-category");

    if (filterButtons.length > 0 && serviceCategories.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const categoryFilter = button.textContent.trim().toUpperCase();

                // Highlight active button
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                // Filter visible service sections
                serviceCategories.forEach(category => {
                    const categoryTitle = category.querySelector("h3").textContent.trim().toUpperCase();
                    
                    if (categoryFilter === "ALL SERVICES" || categoryTitle.includes(categoryFilter)) {
                        category.style.display = "block";
                    } else {
                        category.style.display = "none";
                    }
                });
            });
        });
    }

    /* FORMS: Client-Side Form Validation & Error Handling*/
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent standard page refresh

            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            const phoneInput = form.querySelector('input[type="tel"]');
            let isValid = true;
            let errorMessage = "";

            // Validate Name Field
            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "• Please enter your full name.\n";
            }

            // Validate Email Field with Regular Expression
            if (emailInput) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value.trim())) {
                    isValid = false;
                    errorMessage += "• Please enter a valid email address.\n";
                }
            }

            // Validate Phone Field if present (Minimum 10 digits check)
            if (phoneInput && phoneInput.value.trim() !== "") {
                const phonePattern = /^[0-9+\s-]{10,}$/;
                if (!phonePattern.test(phoneInput.value.trim())) {
                    isValid = false;
                    errorMessage += "• Please enter a valid phone number (at least 10 digits).\n";
                }
            }

            // Display Feedback to User
            if (!isValid) {
                alert("Please correct the following errors:\n\n" + errorMessage);
            } else {
                alert("Thank you! Your request has been successfully submitted.");
                form.reset(); // Reset form fields on successful submission
            }
        });
    });

    /* GALLERY PAGE: Image Lightbox Preview Modal*/
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener("click", () => {
                // Open full-sized view or print image detail info
                alert(`Viewing image: ${img.alt}`);
            });
        });
    }

});