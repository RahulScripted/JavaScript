// Accept an integer input from the console and store it in the variable N. Accept a string input from the console and store it in the variable S. Output the integer and the string on the same line




process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let N = parseInt(input[0]);
    let S = input[1];
    console.log(N + " " + S);
});