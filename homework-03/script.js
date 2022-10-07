let firstNum = + prompt('Enter any number:');
let secondNum = + prompt('Enter another number:');
let sumNum, subNum, mulNum, divNum;

if(isNaN(firstNum) || isNaN(secondNum)) {
    alert('You entered NOT a number. Try again.');
} else {
    sumNum = firstNum + secondNum;
    subNum = firstNum - secondNum;
    mulNum = firstNum * secondNum;
    divNum = firstNum / secondNum;

    alert(`User entered ${firstNum} and ${secondNum}:
    ${firstNum} + ${secondNum} = ${sumNum}
    ${firstNum} - ${secondNum} = ${subNum}
    ${firstNum} * ${secondNum} = ${mulNum}
    ${firstNum} / ${secondNum} = ${divNum}`);
}

