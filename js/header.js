
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelector('.nav-menu a.nav-menu-link_active').classList.remove('nav-menu-link_active');
            menuLink.classList.add('nav-menu-link_active');
        }

    });
}, { rootMargin: '-30% 0px -70% 0px' });


const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu_visible');
    });

    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);

    if (target) {
        observer.observe(target);
    }

});


const redirectContact = () => {
    const menuLinkContact = document.querySelector(`.nav-menu a[href="#contact"]`);
    menuLinkContact.click();
}