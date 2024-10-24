// You are given 2 integers - A and B. For each test case, you need to output the following 2 space separated integers on a single line The quotient when A is divided by B - i.e. A / B. The remainder when A is divided by B - i.e. A % B.





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [A, B] = input[i].split(" ").map(Number);
        console.log(parseInt(A / B) + " " + (A % B));
    }
});