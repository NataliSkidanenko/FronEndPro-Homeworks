const array = [1, 2, 3, 4, 5, 6, 7];
console.log(`Початковий массив: ${array}`);

removeElement(array, 5);
console.log(`Видалено 5 з масиву: ${array}`);

function removeElement(array, item) {
    array.splice(array.indexOf(item), 1);
}
