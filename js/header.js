
const changeClass = (elementToActive) => {
    let currentActive = document.getElementsByClassName("nav-menu-link_active");
    currentActive[0].classList.remove("nav-menu-link_active");
    elementToActive.classList.add("nav-menu-link_active");
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("aria-label")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }

});
