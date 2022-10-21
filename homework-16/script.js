// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію
// pow (num, degree)

const num = +prompt('Введіть число для піднесення в степінь', '2');
const degree = +prompt('Введіть степінь', '10');

if (isNaN(num) || isNaN(degree)) {
    alert('Ви ввели НЕ число');
} else {
    alert(`${num} ^ ${degree} = ${pow(num, degree)}`);
}

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }

    if (degree === 1) {
        return num;
    }

    if (degree < 0) {
        return 1 / (num * pow(num, Math.abs(degree) - 1));
    }

    if (degree > 0) {
        return num * pow(num, degree - 1);
    }
}
