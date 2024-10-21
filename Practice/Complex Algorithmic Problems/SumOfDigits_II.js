// Write a program to calculate the sum of the digits present in an alphanumeric string.




let inputString = '';

rl.on('line', (input) => {
    inputString = input;
    rl.close();
}).on('close', () => {
    let sum = 0;


    for (let char of inputString) {
        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char);
        }
    }

    console.log(sum);
    process.exit(0);
});