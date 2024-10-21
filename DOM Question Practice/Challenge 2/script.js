// Select
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let btn = document.getElementById("btn");

// Add Event listener
btn.addEventListener("click",function(){
    let src1 = img1.src;
    let src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
});