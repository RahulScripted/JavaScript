// Chef has invented 1-minute Instant Noodles. As the name suggests, each packet takes exactly 1 minute to cook. Chef's restaurant has X stoves and only 1 packet can be cooked in a single stove at any minute. How many customers can Chef serve in Y minutes if each customer orders exactly 1 packet of noodles?




function maxCustomers(X, Y){
    console.log(X * Y);
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const nums = input.split(' ');
  const x = parseInt(nums[0]);
  const y = parseInt(nums[1]);
  maxCustomers(x, y);
});