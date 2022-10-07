let operation = prompt(`Enter one of the arithmetic operations:
_____+ _____ - _____ * _____ / _____`);
let firstNum = + prompt('Enter first number:');
let secondNum = + prompt('Enter second number:');
let sum = firstNum + secondNum;
let sub = firstNum - secondNum;
let mult = firstNum * secondNum;
let div = firstNum / secondNum;

if(isNaN(firstNum) || isNaN(secondNum) || operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')
{
    alert('You have entered INVALID characters');
} else {
    switch(operation) {
        case '+':
            alert(`${firstNum} + ${secondNum} = ${sum}`);
            break;
        case '-':
            alert(`${firstNum} - ${secondNum} = ${sub}`);
            break;
        case '*':
            alert(`${firstNum} * ${secondNum} = ${mult}`);
            break;
        case '/':
            alert(`${firstNum} / ${secondNum} = ${div}`);
            break;
    }
}
