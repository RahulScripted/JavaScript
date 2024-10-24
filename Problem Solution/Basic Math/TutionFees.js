// You will attend tuitions for X weeks, and the cost of tuition per week is Y dollars. You need to compute and output your total tuition fees.





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data',function(chunk){
    input += chunk;
});
process.stdin.on('end',function(){
    input = input.split('\n');
    let t = parseInt(input[0]);
    for(let i = 1;i<=t;i++){
        let [X,Y] = input[i].split(" ").map(Number);
        const tution = X*Y;
        console.log(tution);
    }
    
})