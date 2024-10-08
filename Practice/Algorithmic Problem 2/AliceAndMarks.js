// Alice has scored X marks in her test and Bob has scored Y marks in the same test. Alice is happy if she scored at least twice the marks of Bob’s score. Determine whether she is happy or not.





function isAliceHappy(x, y){
    if(x >= (2 * y)) console.log("Yes");
    else console.log("No");
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const nums = input.trim().split(' ');
    const x = parseInt(nums[0]); 
    const y = parseInt(nums[1]); 
    isAliceHappy(x, y);
});