// Write a  function that checks and return maximum number among 2



let maxOf2 = (num1,num2) => {
    if(num1 > num2) return num1;
    else return num2;
}

let num1 = 43, num2 = 57;
console.log(maxOf2(num1,num2));