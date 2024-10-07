// Write a program to check whether a given year is a leap year or not. If a number is divisible by 400 or divisible by 4 but not by 100, then the year is considered a leap year. Print Leap year if the given year is a leap year; otherwise, print Not a leap year.




let year = parseInt(inputChar);

if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) console.log("Leap year");
else console.log("Not a leap year");