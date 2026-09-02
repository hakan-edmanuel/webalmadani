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
