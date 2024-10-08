// Given n (n is even), determine the number of black cells in an n x n chessboard.





function totalBlackCells(n){
    console.log((n * n) / 2);
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function (input) {
   let n = parseInt(input); 
   totalBlackCells(n);
});