// Write a program to generate and print the first N terms of the Fibonacci series using a for-loop.





let N = parseInt(inputChar);

let first = 0, second = 1, next;
let result = [];

for (let i = 1; i <= N; ++i) {
    result.push(first);
    next = first + second;
    first = second;
    second = next;
}

console.log(result.join(' '));