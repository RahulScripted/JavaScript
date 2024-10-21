// How to accept integer inputs




process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    let N = parseInt(input);
    console.log(N);
});