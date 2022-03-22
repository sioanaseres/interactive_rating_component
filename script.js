"use strict"
const btnSubmit = document.getElementById("buttonSubmit");
const container = document.querySelector(".container");
const containerAnswer = document.querySelector(".containerAnswer");
const output = document.querySelector(".output");
const options = document.querySelectorAll(".option");


btnSubmit.addEventListener("click", function(e){
    e.preventDefault();
    container.classList.add("hidden");
    containerAnswer.classList.remove("hidden");
    options.forEach(op => {
        op.classList.remove("selected");
    })
})

containerAnswer.addEventListener("click", function(){
    container.classList.remove("hidden");
    containerAnswer.classList.add("hidden");
   
})


options.forEach((op,index) => {

op.addEventListener("click", function(){
    op.classList.add("selected");
    output.innerText = ` You selected ${index + 1} out of 5`

})

})

