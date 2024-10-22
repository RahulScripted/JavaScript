// You need to do the following

// 1.  Replace the Custom inputs with Sample test case 2 and click Run to check the result. You can click the Copy icon at the top-right of the sample testcases to copy easily.

// 2.  Replace the Custom inputs with your own created inputs and click Run to check the result. You can experiment a few more options.





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
        console.log(N + 1);
    }
});