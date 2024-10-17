// Write a function named calculatePower that takes an integer base and returns the result of raising base to the power of 10.




const base = parseInt(input);
function calculatePower(base) {
    let ans = 1;
    for (let i = 0; i < 10; i++) ans *= base;
    return ans;
}

console.log(calculatePower(base));