// You are given 2 integers - A and B. For each test case, you need to output the following 4 space separated integers on a single line (A - B), (B − A),  abs(A − B) & abs(B − A).





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [A,B] = input[i].split(" ").map(Number);
        console.log((A-B)+" "+(B-A)+" "+Math.abs(A-B)+" "+Math.abs(B-A));
    }
});