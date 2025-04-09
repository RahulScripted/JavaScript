// Find factorial




let calculateFactorial = (num) => {
    if(num == 0 || num == 1) return 1;

    let fact = 1;
    for(let i = 2;i <= num; i++){
        fact *= i;
    }
    return fact;
}

let num = 0;
console.log(calculateFactorial(num));