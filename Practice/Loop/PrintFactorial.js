// Write a program that uses a while loop to find the factorial of a given number.




let N = parseInt(inputChar);

let ans = 1;
while(N > 0){
    ans *= N;
    N--;
}
console.log(ans);