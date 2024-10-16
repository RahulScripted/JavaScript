// Recently, Chef visited his doctor. The doctor advised Chef to drink at least 2000 ml of water each day. Chef drank X ml of water today. Determine if Chef followed the doctor's advice or not.





function checkWaterConsumption(tests){
    let t = parseInt(tests[0]);
    for(let i = 1;i <= t;i++){
        const nums = tests[i].split(' '); 
        let x = parseInt(nums[0]);
        if(x >= 2000) console.log("Yes");
        else console.log("No");
    }
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const tests = input.split('\n');
  checkWaterConsumption(tests);
});