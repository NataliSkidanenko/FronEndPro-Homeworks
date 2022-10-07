let hours = + prompt('Enter the number of hours:');
let secondsTotal;
const minuts = 60;
const seconds = 60;


if(isNaN(hours)) {
    alert('You entered NOT a number. Try again.');
} else {
    secondsTotal = hours * minuts * seconds;
    alert(`${hours} hour(s) = ${secondsTotal} seconds`);
}


