// Given an integer N, Calculate and print the sum and product of its digit.





let N = parseInt(inputChar);
let sum = 0,product = 1;
while(N){
    let digit = (N % 10);
    sum += digit;
    product *= digit;
    N = Math.floor(N / 10);
}
console.log(sum + " " + product);