let firstNum = + prompt('Enter any number:');
let secondNum = + prompt('Enter another number:');

// Нижче я оголошую змінні всередині блоку і розумію,
// що область видимості у них буде тільки всередині цього блоку.

if(isNaN(firstNum) || isNaN(secondNum)) {
    alert('You entered NOT a number. Try again.');
} else {
    let sumNum = firstNum + secondNum;
    let subNum = firstNum - secondNum;
    let mulNum = firstNum * secondNum;
    let divNum = firstNum / secondNum;

    alert(`User entered ${firstNum} and ${secondNum}:
    ${firstNum} + ${secondNum} = ${sumNum}
    ${firstNum} - ${secondNum} = ${subNum}
    ${firstNum} * ${secondNum} = ${mulNum}
    ${firstNum} / ${secondNum} = ${divNum}`);
}

