// Given an integer N, print the number of elements between 1 and N that are not divisible by 2, 3, or 5.





let N = parseInt(inputChar);
let cnt = 0;

for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) cnt++;
}

console.log(cnt);