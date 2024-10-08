// Given the values of A and B, can you help Chef find the absolute difference between the correct answer and the value his program prints?




function abDifference(a, b){
    console.log(Math.abs((a * b) - (a + b)));
}
 
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
   const nums = input.trim().split(' ');
   const a = parseInt(nums[0]); 
   const b = parseInt(nums[1]); 
   abDifference(a, b);
}); 