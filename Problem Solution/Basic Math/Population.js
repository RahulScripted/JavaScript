// There were initially X million people in a town, out of which Y million people left the town and Z million people immigrated to this town. Determine the final population of the town in millions.





process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [X, Y, Z] = input[i].split(" ").map(Number);
        let total_population = X - Y;
        total_population = total_population + Z;
        console.log(total_population);
    }
});