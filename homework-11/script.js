const STATIC_ARRAY = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

const positiveArray = getPositiveElements(STATIC_ARRAY);
const evenPositiveArray = getEvenElements(positiveArray);
const oddPositiveArray = getOddElements(positiveArray);
const negativeArray = getNegativeElements(STATIC_ARRAY);
const minElement = getMinElement(STATIC_ARRAY);
const maxElement = getMaxElement(STATIC_ARRAY);

console.log("Дано масив:");
console.log(STATIC_ARRAY);

console.log("\n Позитивні числа в масиві:");
console.log(positiveArray);

console.log(`\n Кількість позитивних чисел в масиві:
    ${positiveArray.length}`);

console.log(`\n Кількість негативних чисел в масиві:
    ${negativeArray.length}`);

console.log(`\n Кількість парних позитивних елементів: 
    ${evenPositiveArray.length}`);

console.log(`\n Кількість НЕпарних позитивних елементів:
    ${oddPositiveArray.length}`);

console.log(`\n Сума парних позитивних елементів: 
    ${getSumArray(evenPositiveArray)}`);

console.log(`\n Сума НЕпарних позитивних елементів: 
    ${getSumArray(oddPositiveArray)}`);

console.log(`\n Добуток позитивних елементів: 
    ${getMultArray(positiveArray)}`);

console.log(`\n Найменше число в масиві ${minElement}
    з позицією ${STATIC_ARRAY.indexOf(minElement)}`);

console.log(`\n Найбільше число в масиві ${maxElement}
    з позицією ${STATIC_ARRAY.indexOf(maxElement)}`);

console.log("\n Масив обнулився, крім maxElement:");
console.log(zeroingWithException(STATIC_ARRAY, maxElement));

function getPositiveElements(array) {
    return array.filter((item) => item > 0);
}

function getNegativeElements(array) {
    return array.filter((item) => item < 0);
}

function getEvenElements(array) {
    return array.filter((element) => element % 2 === 0);
}

function getOddElements(array) {
    return array.filter((element) => element % 2 !== 0);
}

function getSumArray(array) {
    return array.reduce((currentValue, element) => currentValue + element);
}

function getMultArray(array) {
    return array.reduce((currentValue, element) => currentValue * element);
}

function getMinElement(array) {
    return array.reduce((currentValue, element) => {
        if (element <= currentValue) {
            return element;
        } else {
            return currentValue;
        }
    });
}

function getMaxElement(array) {
    return array.reduce((currentValue, element) => {
        if (element >= currentValue) {
            return element;
        } else {
            return currentValue;
        }
    });
}

function zeroingWithException(array, exeption) {
    return array.map((element) => {
        if (element !== exeption) {
            return 0;
        } else {
            return element;
        }
    });
}
