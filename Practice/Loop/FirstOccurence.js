// Write a program using a 'for' loop to find and print the numbers divisible by 8 from 1 to N. Check the sample input / output below for further details.






let N = parseInt(inputChar);

let result = [];
for (let i = 1; i <= N; i++) {
    if (i % 8 !== 0) continue;
    result.push(i);
}

console.log(result.join(' '));