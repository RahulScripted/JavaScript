// Chef needs to park her car while she watches a movie. The parking charges at the theater are as follows:

// 1.  Rs. X for the first 1 hour

// 2.  Rs. Y for every extra hour after the first hour

// 3.  If Chef parks her car for H hours, what is the total parking charges that she should pay?





function totalAmount(x, y, h){
    console.log(x + (h - 1) * y);
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const nums = input.trim().split(' ');
  const x = parseInt(nums[0]); 
  const y = parseInt(nums[1]); 
  const h = parseInt(nums[2]); 
  totalAmount(x, y, h);
});