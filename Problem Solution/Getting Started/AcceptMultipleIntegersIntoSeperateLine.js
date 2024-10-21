// How to accept multiple integers on separate lines





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    const [A, B] = input[0].split(" ").map(Number);
    const [C, D, E] = input[1].split(" ").map(Number);
    const [F, G, H, I] = input[2].split(" ").map(Number);
    console.log(A + " " + B + " " + C + " " + D + " " + E + " " + F + " " + G + " " + H + " " + I);
});