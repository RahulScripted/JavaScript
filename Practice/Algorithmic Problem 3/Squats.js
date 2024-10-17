// Somu went to the gym today. He decided to do X sets of squats. Each set consists of 15 squats. Determine the total number of squats that he did today.





function totalSquats(tests) {
    let t = parseInt(tests[0]);
    for (let i = 1; i <= t; i++) {
        const x = parseInt(tests[i].trim());
        console.log(x * 15);
    }
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const tests = input.split('\n');
    totalSquats(tests)
});