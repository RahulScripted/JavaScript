let start = document.getElementById("start");
let end = document.getElementById("end");
let p = document.querySelector("p");

let count = 0;
let storeInterval;
start.addEventListener("click",function(){
    storeInterval = setInterval(() => {
        p.innerHTML = count;
        count++;
    }, 1000);
})

end.addEventListener("click",function(){
    clearInterval(storeInterval);
})