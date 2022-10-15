const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, CHARACTERS);
console.log(key);

function generateKey(length, CHARACTERS) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result = result + CHARACTERS[getRandomInt(CHARACTERS.length)];
    }
    return result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
