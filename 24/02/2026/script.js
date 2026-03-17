let num1 = 10;
let num2 = 5;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

if (operator === "+") {
    result = number1 + number2;
} 
else if (operator === "-") {
    result = number1 - number2;
} 
else if (operator === "*") {
    result = number1 * number2;
} 
else if (operator === "/") {
    result = number1 / number2;
} 
else {
    result = "Invalid operator";
}

console.log("Result: " + result);