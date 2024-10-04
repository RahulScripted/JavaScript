// Chef has recently started learning from the new CodeChef SQL course. He has a table which initially has R rows and C columns. He then adds E extra rows to it. How many total cells does he have finally?




function totalCells(r, c, e){
    console.log((r + e )* c);
}
 
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
   const nums = input.trim().split(' ');
   const r = parseInt(nums[0]); 
   const c = parseInt(nums[1]); 
   const e = parseInt(nums[2]); 
   totalCells(r, c, e);
}); 