// Write a program to input an integer n ( the length of array ), then print the difference between largest even and largest odd number in an array containing elements from 1 to n ( both inclusive ).





let n = parseInt(inputChar);

let largest_even = n;
let largest_odd = n - 1;

if (n % 2 !== 0) {
    largest_even = n - 1;
    largest_odd = n;
}

console.log(largest_even - largest_odd);