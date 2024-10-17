// Write a program to check if the given number N is Armstrong number.





let n = parseInt(inputChar);
function calculatePower(base, len) {
    let ans = 1;
    for (let i = 1; i <= len; i++) ans *= base;
    return ans;
}

function checkArmstrong(n) {
    let x = n;
    let digits = [];
    while (n > 0) {
        let b = n % 10;
        digits.push(b);
        n = Math.floor(n / 10);
    }

    let len = digits.length;
    let sum = 0;
    for (let i of digits) sum += calculatePower(i, len);
    return x === sum;
}

if (checkArmstrong(n)) console.log("YES");
else console.log("NO");