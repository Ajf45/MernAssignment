function getUserInput(message) {
    return parseFloat(prompt(message));
}

// Function to calculate multiplication
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // Check if the divisor is not zero to avoid division by zero error
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero!";
    }
}

var firstNumber = getUserInput("Enter the first number:");
var secondNumber = getUserInput("Enter the second number:");

var multiplicationResult = multiply(firstNumber, secondNumber);
console.log(`Multiplication: ${firstNumber} * ${secondNumber} = ${multiplicationResult}`);

// Calculate and display the division
var divisionResult = divide(firstNumber, secondNumber);
console.log(`Division: ${firstNumber} / ${secondNumber} = ${divisionResult}`);