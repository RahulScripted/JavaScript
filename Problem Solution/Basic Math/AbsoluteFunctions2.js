// Chef and Chefina both love chocolates. Chef's parents gave him A chocolates out of a total of N chocolates. The remaining chocolates were given to Chefina. What was the difference between the count of chocolates received by Chef and Chefina?





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let [N,A] = input[i].split(" ").map(Number);
        const chef_chocolates = A;
        const chefina_chocolates = N - A;
        const diff = Math.abs(chefina_chocolates - chef_chocolates);
        console.log(diff);
    }
});
