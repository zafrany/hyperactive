let burgerButton = document.querySelector(".toggle-button");
let burgerPressed = 0;
let careerSubmenuButton = document.querySelector(".career");
let submitButton = document.querySelector(".talk-with-me-btn");
let hitSubmenu = document.querySelectorAll(".hiw-submenu__category");
let qna = document.querySelectorAll(".question");

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
})

window.addEventListener('resize', function(event) {
    let careerSubMenue = document.querySelector('.career-submenu')
    let innerInfo = document.querySelectorAll(".category-inner-info");

    if(this.window.innerWidth >= 925){
        careerSubMenue.classList.add("displayNone");
        careerSubMenue.classList.remove("displayFlex");
    }
});

submitButton.addEventListener('click', ()=>{
    let inputForm = document.querySelectorAll(".input-box input");
    if(inputForm[0].value === "")
        inputForm[0].classList.add('invalid');
    else 
        inputForm[0].classList.remove('invalid');

    if(inputForm[1].value[0] != 0 || inputForm[1].value.length < 10){
        inputForm[1].classList.add('invalid');
        inputForm[1].value = "";
    }
    else 
        inputForm[1].classList.remove('invalid');

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputForm[2].value)){
        inputForm[2].classList.add('invalid');
        inputForm[2].value = "";
    }
    else 
        inputForm[2].classList.remove('invalid');
})

for(let i = 0; i < hitSubmenu.length; i++){
    let innerInfo = document.querySelectorAll(".category-inner-info");
    hitSubmenu[i].addEventListener('click', ()=>{
        innerInfo[i].classList.toggle("closed-submenu")        
    })
}

for(let i = 0; i < qna.length; i++){
    let answers = document.querySelectorAll('.answer-hidden');
    let arrowIcon = document.querySelectorAll('.question i');
    qna[i].addEventListener('click', ()=> {
        answers[i].classList.toggle("answer");
        arrowIcon[i].classList.toggle("icon-arrow-up");
        arrowIcon[i].classList.toggle("icon-arrow-down");
    })
}