document.addEventListener("DOMContentLoaded", () => {
    // PS5 Image 3D Effect on Scroll
    const ps5Image = document.getElementById("ps5-image");
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        ps5Image.style.transform = `rotateY(${scrollPos / 10}deg)`;
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in Effects for Sections
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
