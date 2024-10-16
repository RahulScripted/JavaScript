// Write a program that uses a for loop to print the squares from 1 to N, but skips numbers greater than 5.





let N = parseInt(inputChar); 
for (let i = 1; i <= N; i++) {
    if (i > 5) break;
    console.log(i * i);
}