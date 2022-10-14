const elements = prompt("Введіть елементи масиву через пробіл:");
const customArray = getArray(elements);
console.log("Створено новий масив:");
console.log(customArray);
console.log("Відсортовано масив:");
console.log(sortArray(customArray));
console.log("З масиву видалені 2-4 елементи:");
console.log(deleteElements(customArray, 2, 4));

function getArray(elements) {
    const array = elements.trim().split(" ");
    return array.map(function (value) {
        if (isNaN(Number(value))) {
            return value;
        } else {
            return Number(value);
        }
    });
}

function sortArray(array) {
    const checkForNumber = array.every(function (value) {
        if (typeof value === "number") {
            return true;
        } else {
            return false;
        }
    });

    if (checkForNumber) {
        return array.sort((a, b) => a - b);
    } else {
        return array.sort();
    }
}

function deleteElements(array, start, end) {
    array.splice(start - 1, end - start + 1);
    return array;
}
