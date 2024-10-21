// How to accept multiple inputs in a line




process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const [A, B, C] = input.split(" ").map(Number);
    console.log(A + " " + B + " " + C);
});