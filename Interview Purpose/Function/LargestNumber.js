// Find the largest number in array




let findLargest = (arr) => {
    let maxi = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > maxi) maxi = arr[i];
    }
    return maxi;
}

const arr = [2, 6, 13, 7, 4]
console.log(findLargest(arr));