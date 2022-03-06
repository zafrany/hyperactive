let burgerButton = document.querySelector(".toggle-button");
let burgerPressed = 0;
let careerSubmenuButton = document.querySelector(".career");

burgerButton.addEventListener('click', ()=> {
    let dropDownMenu = document.querySelector(".dropdown-menu");
    let crossAnimation = document.querySelectorAll(".toggle-button__bar");
    if (burgerPressed === 0){

        crossAnimation[0].classList.remove("top-bar-animation-reverse");
        crossAnimation[1].classList.remove("middle-bar-animation-reverse");
        crossAnimation[2].classList.remove("bottom-bar-animation-reverse");

        crossAnimation[0].classList.add("top-bar-animation");
        crossAnimation[1].classList.add("middle-bar-animation");
        crossAnimation[2].classList.add("bottom-bar-animation");
        burgerPressed = 1;

        dropDownMenu.classList.add("displayFlex");
        dropDownMenu.classList.remove("displayNone");    }

    else {
        crossAnimation[0].classList.remove("top-bar-animation");
        crossAnimation[1].classList.remove("middle-bar-animation");
        crossAnimation[2].classList.remove("bottom-bar-animation");

        crossAnimation[0].classList.add("top-bar-animation-reverse");
        crossAnimation[1].classList.add("middle-bar-animation-reverse");
        crossAnimation[2].classList.add("bottom-bar-animation-reverse");
        burgerPressed = 0;

        dropDownMenu.classList.add("displayNone");
        dropDownMenu.classList.remove("displayFlex");
    }
})

careerSubmenuButton.addEventListener('click', ()=>{
    let careerSubMenue = document.querySelector('.career-submenu')
    if(careerSubMenue.classList.contains("displayFlex")){
        careerSubMenue.classList.add("displayNone");
        careerSubMenue.classList.remove("displayFlex");
    }
    else{
        careerSubMenue.classList.add("displayFlex");
        careerSubMenue.classList.remove("displayNone");
    }
    console.log(careerSubMenue.classList);
})

let arrow = document.querySelector('.arrow-image-container');
arrow.addEventListener('mouseover', ()=> {
    let career = document.querySelector('.career-submenu');
    career.classList.remove("displayNone");
    career.classList.add("displayFlex");
})

arrow.addEventListener('mouseleave', ()=> {
    let career = document.querySelector('.career-submenu');
    career.classList.add("displayNone");
    career.classList.remove("displayFlex");
})

window.addEventListener('resize', function(event) {
    let careerSubMenue = document.querySelector('.career-submenu')
    if(this.window.innerWidth >= 925){
        careerSubMenue.classList.add("displayNone");
        careerSubMenue.classList.remove("displayFlex");
    }
});