// Write a for loop that skips even numbers between 1 to 20


// 1st way
for(let i = 1;i <= 20; i+= 2){
    console.log(i);
}

// 2nd way
for(let i = 1;i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}