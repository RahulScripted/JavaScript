// Write a program that takes an operator (+, -, *, /) as input. Use a 'switch' statement to return the name of corresponding arithmetic operation among Addition,Subtraction,Multiply and Divide.




const inputChar = input.trim();

let operation;
switch (inputChar) {
    case '+':
        operation = "Addition";
        break;
    case '-':
        operation = "Subtraction";
        break;
    case '*':
        operation = "Multiply";
        break;
    case '/':
        operation = "Divide";
        break;
    default:
        operation = "Invalid operator";
}

console.log(operation);