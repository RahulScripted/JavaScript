// In this problem you need to write a program which does the following: Accepts the number of inputs / test cases as 't'. The only line of each test case contains 2 integers - declare them as variables A and B. For each test case, you need to perform the following operations

// 1.  Create a variable X - the division of A by B which returns a float value

// 2.  Create a variable Y - the division of A by B which returns a integer value

// 3.  Output 2 space separated integers - X and Y in a single line.





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [A, B] = input[i].split(' ').map(Number);
        let D = A / B;
        console.log(D+" "+parseInt(D));
    }
});