const divsOverlay = document.getElementsByClassName('description-overlay');

for (let index = 0; index < divsOverlay.length; index++) {
    const element = divsOverlay[index];
    element.addEventListener('click', () => {
        element.classList.toggle('description-overlay-clicked');
    });
}
