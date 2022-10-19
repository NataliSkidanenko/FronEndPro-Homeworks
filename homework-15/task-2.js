alert(
    'Завдання 2. В наступних вікнах введіть числа і операцію для обчислення.'
);

const firstNum = Number(prompt(`Введіть перше число:`, 33));
const secondNum = Number(prompt(`Введіть друге число:`, 5));
const operation = prompt(`Введіть одну з операцій +, -, *, /, %, ^`, '+');

doMath(firstNum, secondNum, operation);

function doMath(x, y, sign) {
    if (isNaN(x) || isNaN(y)) {
        alert('Ви ввели не число.');
    } else {
        switch (sign) {
            case '+':
                alert(`${x} + ${y} = ${x + y}`);
                break;
            case '-':
                alert(`${x} - ${y} = ${x - y}`);
                break;
            case '*':
                alert(`${x} * ${y} = ${x * y}`);
                break;
            case '/':
                alert(`${x} / ${y} = ${x / y}`);
                break;
            case '%':
                alert(`${x} % ${y} = ${x % y}`);
                break;
            case '^':
                alert(`${x} ^ ${y} = ${x ** y}`);
                break;
            default:
                alert(
                    `Уупс, щось пішло не так! Можливо ви ввели неправильну операцію та/або скасували введення!`
                );
        }
    }
}
