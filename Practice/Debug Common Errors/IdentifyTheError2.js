// Rectify the errors in the program to correctly print the log base 10 of given input. If the output is not defined print Invalid input.




let x = parseFloat(inputChar);

if (x > 0) {
    let y = Math.log10(x);
    console.log(y);
}
else console.log("Invalid input");