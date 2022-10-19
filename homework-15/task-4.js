alert('Завдання 4. Видалення символів з рядка');

const anyStr = prompt('Введіть будь-який рядок', 'якийсь рядок');
const delChar = prompt('Введіть символи, які потрібно видалити БЕЗ пробілу', 'яр17п')
    .trim()
    .split('');

const newStr = deleteCharFromStr(anyStr, delChar).string;
const deleted = deleteCharFromStr(anyStr, delChar).deleted;
const missing = deleteCharFromStr(anyStr, delChar).missing;
alert(`Видалені: ${deleted} \nВідсутні: ${missing} \nРезультат: ${newStr}`);

function deleteCharFromStr(str, char) {
    let newStr = [];
    let deletedChar = [];
    let missingChar = [];

    for (let i = 0; i < str.length; i++) {
        if (char.includes(str[i]) === false) {
            newStr.push(str[i]);
        }
    }

    const arrayOfString = str.split('');
    for (let i = 0; i < char.length; i++) {
        if (arrayOfString.includes(char[i])) {
            deletedChar.push(char[i]);
        } else {
            missingChar.push(char[i]);
        }
    }

    return (data = {string: newStr.join(''), deleted: deletedChar, missing: missingChar});
}
