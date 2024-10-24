// In a coding contest, there are prizes for the top rankers. The prize scheme is as follows:

// 1.  Top 10 participants receive rupees X each.

// 2.  Participants with rank 11 to 100 (both inclusive) receive rupees Y each.

// Find the total prize money over all the participants.





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [X, Y] = input[i].split(' ').map(Number);
        const prizeTop10 = X * 10;
        const prizeTop10To100 = Y * 90;
        console.log(prizeTop10 + prizeTop10To100);
    }

})