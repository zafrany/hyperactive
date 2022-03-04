let burgetButton = document.querySelector(".toggle-button");
let burgetPressed = 0;

burgetButton.addEventListener('click', ()=> {
    let crossAnimation = document.querySelectorAll(".toggle-button__bar");
    if (burgetPressed === 0){
        crossAnimation[0].classList.add("top-bar-animation");
        crossAnimation[1].classList.add("middle-bar-animation");
        crossAnimation[2].classList.add("bottom-bar-animation");
    }
    burgetPressed = 1;
})