// Write a program that utilizes a while loop to print the squares of numbers from 1 N.





let N = parseInt(inputChar);
let y = 1;
let result = [];

while (y <= N) {
    result.push(y * y);
    y++;
}
    
console.log(result.join(' '));