
function changeClass(elementToActive) {
    
    let currentActive = document.getElementsByClassName("active");
    currentActive[0].classList.remove("active");

    elementToActive.classList.add("active");
    
}