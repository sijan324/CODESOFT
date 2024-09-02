document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = ''; // Current input string
    let operator = ''; // Current operator
    let operand1 = null; // First operand for calculations

    // Function to update display with current input
    function updateDisplay() {
        display.textContent = currentInput === '' ? '0' : currentInput;
    }

    // Function to handle number button clicks
    function appendNumber(number) {
        currentInput += number;
        updateDisplay();
    }

    // Function to handle operator button clicks
    function setOperator(op) {
        operator = op;
        operand1 = parseFloat(currentInput);
        currentInput = '';
    }

    // Function to perform calculation based on operator
    function calculate() {
        const operand2 = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        updateDisplay();
        // Reset operator and operand1 for next calculation
        operator = '';
        operand1 = null;
    }

    // Event listeners for number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.textContent);
        });
    });

    // Event listeners for operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            setOperator(button.textContent);
        });
    });

    // Event listener for equals button
    document.getElementById('equals').addEventListener('click', calculate);

    // Event listener for clear button
    document.getElementById('clear').addEventListener('click', () => {
        currentInput = '';
        operator = '';
        operand1 = null;
        updateDisplay();
    });
});
