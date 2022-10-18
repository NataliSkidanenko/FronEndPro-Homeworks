alert('Завдання 3. В наступних вікнах потрібні дані для створення двомірного масиву');

const lengthOfArray = Number(prompt('Введіть довжину масиву', 6));
const array2D = create2DArray(lengthOfArray);

alert('Результат дивіться в консолі.');
console.log('Завдання 3. Результат:\n', array2D);

function create2DArray(length) {
    const array = [];
    if (isNaN(length) || length === 0) {
        alert('Ви ввели неправильну довжину масиву');
    } else {
        for (let i = 0; i < length; i++) {
            let temporaryStr = prompt(`Введіть елементи ${i}-го підмасиву через пробіл:`);
            const temporaryArray = temporaryStr.trim().split(' ').map(convertValue);
            array.push(temporaryArray);
        }
    }
    return array;
}

function convertValue(value) {
    if (value.match(/^\d+$/)) {
        return Number(value);
    } else if (value === '') {
        return null;
    } else if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return value;
    }
}
