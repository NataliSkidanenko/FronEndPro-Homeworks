getSum = buildSum();
console.log(`Перше число ${getSum(3)}`);
console.log(`+ 5 = ${getSum(5)}`);
console.log(`+ 20 = ${getSum(20)}`);
console.log(`+ 2 = ${getSum(2)}`);
console.log(`+ 10 = ${getSum(2)}`);

function buildSum() {
    let sum = 0;

    return function (num) {
        return (sum += num);
    };
}
