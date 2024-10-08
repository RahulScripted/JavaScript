// In ChefLand, human brain speed is measured in bits per second (bps). Chef has a threshold limit of X bits per second above which his calculations are prone to errors. If Chef is currently working at Y bits per second, is he prone to errors? If Chef is prone to errors print YES, otherwise print NO.





function isErrorProne(x, y){
    if(y > x) console.log("Yes");
    else console.log("No");
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const nums = input.trim().split(' ');
    const x = parseInt(nums[0]); 
    const y = parseInt(nums[1]); 
    isErrorProne(x, y);
});