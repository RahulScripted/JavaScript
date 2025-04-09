// Write a function to check whether a string start with specific character




let startWithSpecificChar = (str) => {
    if(str[0] == "A" || str[0] == "E" || str[0] == "I" || str[0] == "O" || str[0] == "U" || str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") return true;
    else return false;
}

let str = "Aahul"
console.log(startWithSpecificChar(str));