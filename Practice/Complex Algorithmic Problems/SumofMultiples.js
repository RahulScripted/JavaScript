// Write a program to find the sum of all the numbers from 1 to N, which are multiple of 12 but are not divisible by 24.





const n = parseInt(inputChar);
let sum = 0;
for(let i = 1;i <= n;i++){
    if((i % 12 == 0) && (i % 24 != 0)) sum += i;
}
console.log(sum);