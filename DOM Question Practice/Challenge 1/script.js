let btn = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");

btn.addEventListener("click",function(){
    paragraph.textContent = "Thank you for click";
    paragraph.style.color = "red";
})