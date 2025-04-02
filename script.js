document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lightbox for project images
    document.querySelectorAll("#projects img").forEach(img => {
        img.addEventListener("click", function() {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            document.body.appendChild(lightbox);
            
            const imgElement = document.createElement("img");
            imgElement.src = this.src;
            lightbox.appendChild(imgElement);
            
            lightbox.addEventListener("click", function() {
                lightbox.remove();
            });
        });
    });

    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault();
        }
    });
});
