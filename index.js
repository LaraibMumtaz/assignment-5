"use strict";
//1- Hello Variable
//Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello, World!";
console.log(greeting);
//-----------------------------------------------------------------------------------------------------------------------------------------------
//2- Basic Math
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 2;
let num2 = 6;
let add = num1 + num2;
let diff = num1 - num2;
let pro = num1 * num2;
let quo = num1 / num2;
console.log(`addition= ${add}
Difference= ${diff}
product= ${pro}
quotient= ${quo}`);
//-----------------------------------------------------------------------------------------------------------------------------------------------
//3- Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
let a = 1;
let b = 2;
console.log(`Before swaping: a=${a},b=${b}`);
// Code to swap 'a' and 'b' 
// a now becomes 1+2=3
a = a + b;
// b becomes 3-2=1
b = a - b;
// x becomes 3-1=2
a = a - b;
console.log(`After Swaping: a=${a},b=${b} `); //a=2,b=1
//-----------------------------------------------------------------------------------------------------------------------------------------------
//4-Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message;
//message=4 //through Error: Type 'number' is not assignable to type 'string'. 
//console.log(message)
//--------------------------------------------------------------------------------------------------------------------------------------------------
//5-Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.
let numb1 = 6, numb2 = 9; // Use the modulus operator (%) to find the remainder.
let modlue = numb1 % numb2;
console.log(`module: ${modlue}`);
//-----------------------------------------------------------------------------------------------------------------
//6- Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0; // Increment this value by 1 in two different ways.
if (counter < 5) {
    counter += 1;
}
console.log(`option 1: by using if condition:Increment counter: ${counter}`); //1
counter = 0;
counter++;
console.log(`option 2 :Increment by using this method(counter++): ${counter}`); //1
//------------------------------------------------------------------------------------------------------------------
//7-Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true, b2 = false, c3 = true; // Write expressions using these.
console.log(`a1 && b2:${a1 && b2} `); //false
console.log(`a1 || b2:${a1 || c3} `); //True
console.log(`!(a1&& b2):${!(a1 && b2)} `); //true
//------------------------------------------------------------------------------------------------------------------
//8-Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
console.log("num+=1: ", num += 1); //11
console.log("num-=1: ", num -= 1); //10 because now num was 11
console.log("num /=2: ", num /= 2); //5
//------------------------------------------------------------------------------------------------------------------
//9- Even or Odd
//Instructions: Write a program to check if a number is even or odd.
let num4 = 6; // Determine if this is even or odd.
if (num4 % 2 == 0) {
    console.log("Even");
}
else {
    console.log("odd");
} //even
//------------------------------------------------------------------------------------------------------------------
//10-Voting Eligibility
//Instructions: Check if a person is eligible to vote.
let age = 20; // Check if age is 18 or older to determine voting eligibility.
if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("not eligible");
} //eligible
//-------------------------------------------------------------------------------------------------------------------
//11-Grading System
//Instructions: Assign a grade based on a numerical score.
let score = 40;
let Grade; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score >= 90 && score <= 100) {
    Grade = "A";
    console.log("Grade:", Grade);
}
else if (score >= 80 && score <= 89) {
    Grade = "B";
    console.log("Grade:", Grade);
}
else if (score >= 60 && score <= 79) {
    Grade = "C";
    console.log("Grade:", Grade);
}
else if (score >= 40 && score <= 59) {
    Grade = "D";
    console.log("Grade:", Grade);
}
else {
    console.log("Grade:", Grade = "F");
} //D
//-------------------------------------------------------------------------------------------------------------------
//12--Max of Three
//Instructions: Find the maximum of three numbers.
let x, y, z; // Determine the largest among these.
x = 8;
y = 5;
z = 20;
if (x > y && x > z) {
    console.log("x is greater");
}
else if (y > x && y > z) {
    console.log("Y is Greater");
}
else {
    console.log("Z is Greater");
}
//-------------------------------------------------------------------------------------------------------------
//13-Leap Year Checker
//Instructions: Check if a given year is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
//--------------------------------------------------------------------------------------------------------------
// 14-Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 68; //  change this to test different values
let celsius;
celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`Temperature in Celsius: ${celsius}`);
//--------------------------------------------------------------------------------------------------------------
//15- Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.
let number3 = -5; // Change this to test different numbers
if (number3 > 0) {
    console.log("The number is positive.");
}
else if (number3 < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}
//---------------------------------------------------------------------------------------------------------------
//16-Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.
let number4 = 7;
if (number4 >= 1 && number4 <= 10) {
    console.log(`Multiplication table for ${number4}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number4} * ${i} = ${number4 * i}`);
    }
}
else {
    console.log("Please enter a number between 1 and 10.");
}
