-- Given an integer N, Calculate and print the number of digits present in N.





let N = parseInt(inputChar);

let len = 0;
while(N){
    len++;
    N = Math.floor(N / 10);
}

console.log(len);