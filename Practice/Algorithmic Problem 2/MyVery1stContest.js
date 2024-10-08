// In a contest where N new users visited the contest, A users just saw the problems and didn’t make any submissions and hence won’t get any rating.B users who made a submission but could not solve any problem correctly. Thus, after the contest, they will get a rating in the range 800 - 1000. Everyone else could correctly solve at least 1 problem. Thus, they will get a rating strictly greater than 1000 after the contest. You need to output the number of new users in the contest who, after the contest, will get a rating and also the number of new users who will get a rating strictly greater than 1000.





function solve(n, a, b){
    console.log(n - a);
    console.log(n - a - b);
}
 
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
   const nums = input.trim().split(' ');
   const n = parseInt(nums[0]); 
   const a = parseInt(nums[1]); 
   const b = parseInt(nums[2]); 
   solve(n, a, b);
});