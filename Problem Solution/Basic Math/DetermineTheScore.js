// There is a problem worth X points and it has 10 test cases. It is known that X is a multiple of 10. It is known that each test case is worth the same number of points. You pass N test cases among them. Determine the score that you will get.





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [X,N] = input[i].split(" ").map(Number);
        const points_per_testcase=X/10;
        const score= points_per_testcase*N;
        console.log(score);
    }
});