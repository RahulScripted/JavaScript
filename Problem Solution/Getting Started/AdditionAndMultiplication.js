//  Addition and multiplication




process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [X, Y] = input[i].split(" ").map(Number);
        let S = X + Y;
        let P = X * Y;
        console.log(S + " " + P);
    }
})