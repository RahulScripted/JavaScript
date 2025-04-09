// Write a function that accepts an array and returns the sum of its elements



let findSum = (arr) => {
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}


const arr = [5, 4, 3, 78, 2, 1]
console.log(findSum(arr))