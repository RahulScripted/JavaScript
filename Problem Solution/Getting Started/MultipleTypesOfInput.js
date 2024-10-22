// Lets write a program in the IDE which performs the following

// 1.  The 1st line of input contains t - the count of test-cases

// 2.   AbortControllerEach testcase consists of the following 2 lines of input. The 1st line of the testcase contains 2 integers - accept them as variables A and B.

// 3.  The 2nd line of the testcase contains 1 string - accept it as a variable S. For each test case, output on one line the 2 integers followed by the string





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
        const S = input[pos + 1];
        console.log(A + " " + B + " " + S);
        pos += 2;
    }
});