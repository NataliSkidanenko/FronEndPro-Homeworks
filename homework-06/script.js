let firstNum = + prompt('Enter the first number:');
let secondNum = + prompt('Enter the second number:');
let thirdNum = + prompt('Enter the third number:');
let avg;

if(isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
    alert('You entered NOT a number. Try again.');
} else {
    avg = (firstNum + secondNum + thirdNum)/3;
    alert(`AVG for ${firstNum}, ${secondNum}, ${thirdNum} = ${avg}`);
}


