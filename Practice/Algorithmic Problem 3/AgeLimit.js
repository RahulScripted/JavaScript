// Chef wants to appear in a competitive exam. To take the exam, there are following requirements:

// 1.  Minimum age limit is X (i.e. Age should be greater than or equal to X).

// 2.  Age should be strictly less than Y.

// Chef's current Age is A. Find whether he is currently eligible to take the exam or not.






function checkEligibility(tests){
    let t = parseInt(tests[0]);
    for(let i = 1; i <= t; i++){
        const nums = tests[i].split(' ');
        let x = parseInt(nums[0]);
        let y = parseInt(nums[1]);
        let a = parseInt(nums[2]);

        if(a >= x && a < y) console.log("YES");
        else console.log("NO");
    }
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const tests = input.split('\n');
    checkEligibility(tests);
});