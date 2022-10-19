const array = ['Maya', 45, true, false, 2, 1, 87, 'John', {name: 'Nilson'}, 6, [2, 1, 2]];
console.log('Завдання 1\n', array);
console.log(`Середнє арифметичне чисел в масиві: ${calcAvarage(array)}`);

function calcAvarage(array) {
    const numberArray = array.flat().filter((element) => {
        return typeof element === 'number';
    });

    const sumElements = numberArray.reduce((currentValue, element) => {
        return currentValue + element;
    });

    console.log(`Числа в масиві: ${numberArray}`);
    return sumElements / numberArray.length;
}
