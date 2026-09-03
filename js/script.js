// Mobile navigation toggle
(function () {
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".nav-mobile");

    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", function () {
        var isOpen = mobileNav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
})();

// Lightbox for Gallery
(function () {
    var galleryItems = document.querySelectorAll(".gallery-item img");
    if (galleryItems.length === 0) return;

    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Lightbox Image">
    `;
    document.body.appendChild(lightbox);

    var lightboxImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox-close");

    galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
})();