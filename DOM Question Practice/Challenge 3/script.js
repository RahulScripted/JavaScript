let btn = document.getElementById("btn");
let inputs = document.querySelectorAll("input");

btn.addEventListener("click",function(e){
    e.preventDefault();

    inputs.forEach(function(input){
        if(input.value.trim() === ""){
            alert("Please enter some message");
        }
    });
});