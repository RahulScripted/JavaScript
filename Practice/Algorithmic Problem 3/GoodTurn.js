// Chef and Chefina are playing with dice. In one turn, both of them roll their dice at once. They consider a turn to be good if the sum of the numbers on their dice is greater than 6. Given that in a particular turn Chef and Chefina got X and Y on their respective dice, find whether the turn was good.





function isGoodTurn(tests){
    let t = parseInt(tests[0]);
    for(let i = 1; i <= t; i++){
        const nums = tests[i].split(' '); 
        let x = parseInt(nums[0]);
        let y = parseInt(nums[1]);
        if(x + y > 6) console.log("YES");
        else console.log("NO");
    }
}
  
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
   const tests = input.split('\n').filter(line => line.trim() !== '');
   isGoodTurn(tests);
});