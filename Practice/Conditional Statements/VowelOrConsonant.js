// Write a program that takes a lowercase english alphabet character as input and uses a 'switch' statement to determine if it's a Vowel or Consonant.




const inputChar = input.trim().toLowerCase();

let result;
switch (inputChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        result = "Vowel";
        break;
    default:
        result = "Consonant";
}

console.log(result);