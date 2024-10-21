// You need to write a program which does the following

// 1.  Accepts 2 space separated alphanumeric strings as input in 1st line as the variables A, B.

// 2.  Accepts 3 space separated alphanumeric strings as input in 2nd line as the variables C, D, E.

// 3.  Accepts 4 space separated alphanumeric strings as input in 3rd line as the variables F, G, H, I.

// Prints out 9 space separated strings as output in a single line to the console





process.stdin.setEncoding('utf8')
let input = "";
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let [A, B] = input[0].split(" ").map(String);
    let [C, D, E] = input[1].split(" ").map(String);
    let [F, G, H, I] = input[2].split(" ").map(String);
    console.log(A + " " + B + " " + C + " " + D + " " + E + " " + F + " " + G + " " + H + " " + I);
});