let myNum = prompt("Введіть п'ятизначне число:");
let arrNum = myNum.split("");
let newString = "";

for(let i = 0; i <= 4; i++) {
    newString = newString + arrNum[i] + " ";
}

console.log(newString);