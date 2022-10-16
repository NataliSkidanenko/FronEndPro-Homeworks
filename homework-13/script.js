const array = [1, false, 3, 4, 5, true, 7, 'Таня', 1];
alert(`Початковий массив: ${array}`);
const delElement = convertValue(
    prompt('Введіть елемент, який потрібно видалити:')
);

removeElement(array, delElement);
alert(`З масива видалено елемент ${delElement}: ${array}`);

function convertValue(value) {
    if (value.match(/^\d+$/)) {
        return Number(value);
    } else if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return value;
    }
}

function removeElement(array, item) {
    if (array.includes(item)) {
        if (array.indexOf(item) === array.lastIndexOf(item)) {
            removeOneElement(array, item);
        } else if (array.indexOf(item) !== array.lastIndexOf(item)) {
            const reply = confirm('Видалити всі елементи з таким значенням?');
            if (reply === true) {
                removeAllElements(array, item);
            } else {
                removeOneElement(array, item);
            }
        }
    } else {
        alert('В масиві такого елементу немає!');
    }

    function removeOneElement(array, item) {
        array.splice(array.indexOf(item), 1);
    }
    function removeAllElements(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
            }
        }
    }
}
