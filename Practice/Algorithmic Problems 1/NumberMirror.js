// Write a program that takes a number N as the input, and prints it to the output.




function numberMirror(n){
    console.log(n);
}
 
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const n = parseInt(input.trim()); 
    numberMirror(n);
});
 