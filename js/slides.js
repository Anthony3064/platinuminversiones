let slideIndex = 1;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener('click', () => {
    nextImage(-1);
});

nextButton.addEventListener('click', () => {
    nextImage(1);
});

const nextImage = (n) => {
    showSlides(slideIndex += n);
}

const nextPrevius = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    setTimeout(() => {
        let i;
        let slides = document.getElementsByClassName("slide-item");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
    }, 290);
}