// Input one integer on a single line. If the number is negative print NOT FOUND else print the square root of that number




let number = parseInt(inputChar);

if (number < 0) console.log("NOT FOUND");
else {
    let result = Math.sqrt(number);
    console.log(result);
}