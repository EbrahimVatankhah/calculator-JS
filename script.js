let currentCalculation = '0';

function updateDisplay() {
    document.getElementById('result').innerText = currentCalculation;
}

function addNumber(num) {
    if(currentCalculation === '0') {
        currentCalculation = num;
    } else {
        currentCalculation += num;
    }
    updateDisplay();
}

function addOperator(operator) {
    const lastChar = currentCalculation.slice(-1);
    if(!'+-*/%'.includes(lastChar)) {
        currentCalculation += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    currentCalculation = '0';
    updateDisplay();
}

function deleteChar() {
    currentCalculation = currentCalculation.slice(0, -1);
    if(currentCalculation === '') currentCalculation = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentCalculation = eval(currentCalculation).toString();
        updateDisplay();
    } catch(error) {
        currentCalculation = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if(key >= '0' && key <= '9' || key === '.') addNumber(key);
    if('+-*/%'.includes(key)) addOperator(key);
    if(key === 'Enter') calculate();
    if(key === 'Backspace') deleteChar();
    if(key === 'Escape') clearDisplay();
});