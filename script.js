/* =========================================================
   MOHAMED HANY — PORTFOLIO V2 JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= LOADER ================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500);

    });


    /* ================= NAVBAR ================= */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("open");
        document.body.classList.toggle("menu-open");

    });


    /* CLOSE MOBILE MENU */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("open");
            document.body.classList.remove("menu-open");

        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id = entry.target.getAttribute("id");

                    navItems.forEach(link => {

                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* ================= HERO VISUAL EFFECT ================= */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.innerWidth > 900) {

        window.addEventListener("mousemove", event => {

            const x = (window.innerWidth / 2 - event.clientX) / 120;
            const y = (window.innerHeight / 2 - event.clientY) / 120;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* ================= SMOOTH INTERNAL LINKS ================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            const offset = 80;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});
