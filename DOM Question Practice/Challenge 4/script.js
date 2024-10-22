let inputTxt = document.getElementById("inputTxt");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let ul = document.querySelector("ul");


add.addEventListener("click",function(){
    if(inputTxt.value.trim() !== ""){
        let li = document.createElement("li");
        li.innerHTML = inputTxt.value;
        ul.appendChild(li);
        inputTxt.value = "";
    }
})

remove.addEventListener("click",function(){
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
    }
})