let menuTriggerButton = document.getElementById("menuTrigger");
let mainMenuNav = document.getElementById("mainMenu");

menuTriggerButton.addEventListener("click", function() {
    mainMenuNav.classList.toggle("Active");
    menuTriggerButton.classList.toggle("Active");
}, true)


let previousSlideLink = document.getElementById("previousSlide");
let nextSlideLink = document.getElementById("nextSlide");
let sliderPickerList = document.getElementById("sliderPicker");

let currentSlide = 1;
let sliderList = document.getElementById("sliderList"); 
let allSlides = sliderList.childElementCount;

 function selectSlide(position){
    sliderList.children[currentSlide -1].classList.remove("Active");
    sliderPickerList.children[currentSlide -1].classList.remove("Active");
    currentSlide = position;
    sliderList.children[currentSlide - 1].classList.add("Active");
    sliderPickerList.children[currentSlide - 1].classList.add("Active");
}

previousSlideLink.addEventListener("click", function(){
   let position = (currentSlide === 1) ? allSlides : (currentSlide - 1);
   selectSlide(position)
   }, true)

nextSlideLink.addEventListener("click", function() {
    let position = (currentSlide === allSlides) ? 1 : (currentSlide + 1) ;
    selectSlide(position)
}, true)

sliderPickerList.querySelectorAll(".SliderPickerLink").forEach((element, index) =>{
    element.addEventListener("click", function(){
    let position = index + 1 ;
    selectSlide(position)
})})