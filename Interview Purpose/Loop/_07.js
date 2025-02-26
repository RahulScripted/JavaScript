// Use a for loop to reverse an array [1,2,3,4]


let arr = [1,2,3,4]
console.log(arr);

let lo = 0, hi = arr.length - 1;
while(lo <= hi){
    let temp = arr[lo]
    arr[lo] = arr[hi]
    arr[hi] = temp
    lo++
    hi--
}

console.log(arr);