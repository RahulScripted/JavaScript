// Write a program that Accepts an integer num, checks if it's even using the isEven function, and outputs "Even" or "Odd" accordingly





const n = parseInt(input);
    
function isEven(n) {
    return n % 2 === 0;
}
    
if(isEven(n)) console.log("Even");
else console.log("Odd");