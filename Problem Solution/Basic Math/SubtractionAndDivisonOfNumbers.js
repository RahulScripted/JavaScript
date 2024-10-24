// Write a program that does the following

// 1.  Accepts the number of inputs / test cases as 't'

// 2.  The only line of each test case contains 2 integers - declare them as variables A and B. For each test case, you need to perform the following operations

// 3.  Create a variable - D - what you get after subtracting B from A. Create a variable - Q - the quotient when A is divided by B. Output 2 space separated integers - D and Q in a single line





process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data',function(chunk){
    input += chunk;
});
process.stdin.on('end',function(){
    input = input.split('\n');
    let t = parseInt(input[0]);
    for(let i = 1;i<=t;i++){
        let [A,B] = input[i].split(' ').map(Number);
        let C = A-B;
        let D = A/B;
        console.log(C+" "+D);
    }
})