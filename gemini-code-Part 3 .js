/* ==========================================================================
   AI CODE SNIPPET 5: General Modular Script Architecture
   Purpose: Ensures safe execution after full DOM loading across multiple pages.
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {

    /* ----------------------------------------------------------------------
       Snippet 5A: Interactive Accordion Mechanism
       Purpose: Toggles content height and icon rotation based on user click.
       ---------------------------------------------------------------------- */
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener("click", () => {
                const parentItem = header.parentElement;
                const isOpen = parentItem.classList.contains("active");

                // Close existing items for clean single-panel view
                document.querySelectorAll(".accordion-item").forEach(item => {
                    item.classList.remove("active");
                });

                if (!isOpen) {
                    parentItem.classList.add("active");
                }
            });
        });
    }

    /* ----------------------------------------------------------------------
       Snippet 5B: Form Validation with Regular Expressions (Regex)
       Purpose: Validates required fields, email format, and phone length prior
                to processing form submission.
       ---------------------------------------------------------------------- */
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Intercepts browser page reload

            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            const phoneInput = form.querySelector('input[type="tel"]');
            
            let isValid = true;
            let errorLog = [];

            // 1. Text Input Validation
            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorLog.push("Full Name is required.");
            }

            // 2. Email Regular Expression Validation
            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    isValid = false;
                    errorLog.push("A valid email address is required.");
                }
            }

            // 3. Phone Length Regular Expression Validation
            if (phoneInput && phoneInput.value.trim() !== "") {
                const phoneRegex = /^[0-9+\s-]{10,}$/;
                if (!phoneRegex.test(phoneInput.value.trim())) {
                    isValid = false;
                    errorLog.push("Phone number must contain at least 10 digits.");
                }
            }

            // User Feedback Output
            if (!isValid) {
                alert("Form Errors Detected:\n\n• " + errorLog.join("\n• "));
            } else {
                alert("Success! Your submission has been processed.");
                form.reset();
            }
        });
    });

    /* ----------------------------------------------------------------------
       Snippet 5C: Dynamic DOM Node Creation (Back to Top Scroll)
       Purpose: Instantiates a floating UI button directly through JavaScript
                and manages window scroll position.
       ---------------------------------------------------------------------- */
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.innerHTML = "&#9650;";
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        background-color: #6b21a8;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 999;
    `;
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});