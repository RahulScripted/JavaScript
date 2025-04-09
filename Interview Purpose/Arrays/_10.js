// Copy an array without mutating original one



const arr = [7, 6 ,3 , 2, 1];
// const copyArr = arr.copyWithin()
const copyArr = [...arr];
console.log(copyArr);