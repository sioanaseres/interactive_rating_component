let menuTriggerButton = document.getElementById("menuTrigger");
let mainMenuNav = document.getElementById("mainMenu");

menuTriggerButton.addEventListener("click", function() {
    mainMenuNav.classList.toggle("Active");
    menuTriggerButton.classList.toggle("Active");
}, true)


