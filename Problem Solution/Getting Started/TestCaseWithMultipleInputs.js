//  write a program in the IDE which performs the following

// 1.  The 1st line of input is an integer t - the count of test cases

// 2.AbortControllerEach test case consists of 2 lines of input

// 3.  The 1st line of input has 2 space separated integers - accept them as variables A and B

// 4.  The 2nd line of input has 3 space separated integers - accept them as variables C, D and E

// 5.  For each test case - output all integers on a single line





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');

    let t = parseInt(input[0]);
    let pos = 1;
    for (let i = 1; i <= t; i++) {
        const [A, B] = input[pos].split(' ').map(Number);
        const [C, D, E] = input[pos + 1].split(' ').map(Number);
        console.log(A + " " + B + " " + C + " " + D + " " + E);
        pos += 2;
    }
});