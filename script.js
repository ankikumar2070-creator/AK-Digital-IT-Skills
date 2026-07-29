// ==========================================
// AK Digital IT Skills
// script.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Sticky Header Shadow
    // ==========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.10)";
        }
    });

    // ==========================
    // Active Navigation Link
    // ==========================
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.style.color = "#FFD54F";
            link.style.fontWeight = "700";

        }

    });

    // ==========================
    // Scroll To Top Button
    // ==========================
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ==========================
    // Smooth Scroll
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================
    // Fade Animation
    // ==========================
    const cards = document.querySelectorAll(".card");

    function revealCards() {

        const trigger = window.innerHeight - 100;

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if (top < trigger) {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

        });

    }

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";

    });

    window.addEventListener("scroll", revealCards);

    revealCards();

    // ==========================
    // Footer Year
    // ==========================
    const year = new Date().getFullYear();

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `&copy; ${year} AK Digital IT Skills. All Rights Reserved.`;

    }

});
