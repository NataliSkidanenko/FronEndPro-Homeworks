// Вивести на сторінку в один рядок через кому числа від 10 до 20
let range = "";
for (let i = 10; i <= 20; i++) {
    if (i === 20) {
        range = range + i;
        break;
    }
    range = range + i + ", ";
}
console.log(range);

// Вивести квадрати чисел від 10 до 20
for (let i = 10; i <= 20; i++) {
    console.log(`${i} в квадраті - ${i ** 2}`);
}

// Вивести таблицю множення на 7
const MULTIPLIER = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${MULTIPLIER} x ${i} = ${MULTIPLIER * i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum = sum + i;
}
console.log(`Сумма цілих чисел від 1 до 15 - ${sum}`);

// Знайти добуток усіх цілих чисел від 15 до 35
let mult = 15;
for (let i = 16; i <= 35; i++) {
    mult = mult * i;
}
console.log(`Добуток цілих чисел від 15 до 35 - ${mult}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sumAvg = 0;
for (let i = 1; i <= 500; i++) {
    sumAvg = sumAvg + i;
}
console.log(`Cереднє арифметичне цілих чисел від 1 до 500 - ${sumAvg / 500}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80
let sumEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 !== 0) continue;
    sumEven = sumEven + i;
}
console.log(`Сума парних чисел від 30 до 80 - ${sumEven}`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let i = 100; i <= 200; i++) {
    if (i % 3 !== 0) continue;
    console.log(`${i} кратне 3`);
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників
const NATURAL_NUMBER = 70;
let evenDiv = 0;
let sumEvenDiv = 0;
for (let i = 0; i <= NATURAL_NUMBER; i++) {
    if (NATURAL_NUMBER % i !== 0) continue;
    if (i % 2 === 0) {
        console.log(`${i} парний дільник числа ${NATURAL_NUMBER}`);
        evenDiv++;
        sumEvenDiv = sumEvenDiv + i;
    } else {
        console.log(`${i} дільник числа ${NATURAL_NUMBER}`);
    }
}
console.log(`Всього ${evenDiv} парних дільники`);
console.log(`Сума парних дільникиів - ${sumEvenDiv}`);

// Надрукувати повну таблицю множення від 1 до 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
