// You decided to do X sets of squats at the gym today. Each set consists of 15 squats. Determine the total number of squats that you did today.





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let X = parseInt(input[i]);
        let Y = 15 * X;
        console.log(Y);
    }
});