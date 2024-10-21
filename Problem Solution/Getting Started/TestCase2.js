// Write a program in the IDE which does the following

// 1.  Accepts the count of test cases - t - as an integer input given in the 1st line.

// 2.  This is followed by t lines - Each line contains an integer N. For each test cases, prints out the integer N to console on a separate line (our Input mirror problem)






process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        const N = parseInt(input[i]);
        console.log(N);
    }
});