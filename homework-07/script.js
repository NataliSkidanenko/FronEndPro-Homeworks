const YEAR_NOW = (new Date()).getFullYear();

const user = {
    year: prompt('Ваш рік народження:'),
    city: prompt('Місто, в якому проживаєте:'),
    sport: prompt('Улюблений вид спорту:')
};

let fillAge, fillCity, fillSport;

if(user.year === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else if(isNaN(+user.year) || +user.year <= 1900 || +user.year > YEAR_NOW) {
    alert('Дата народження вказана невірно');
} else {
    user.age = YEAR_NOW - user.year;
    fillAge = true;
}

if(user.city === null) {
    alert('Шкода, що Ви не захотіли ввести своє місто проживання');
} else {
    fillCity = true;
}

if(user.sport === null) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
} else {
    fillSport = true;
}

if(fillAge === true && fillCity === true && fillSport === true) {
    alert(`Тобі ${user.age} років. ${cityAssertion(user)} ${sportAssertion(user)}`);
} else {
    alert('Введіть всю інформацію про себе ще раз. Перезавантажте сторінку.')
}


function cityAssertion(obj) {
    switch(obj.city) {
        case 'Київ':
            return 'Ти живеш у столиці України.';
            break;
        case 'Вашингтон':
            return 'Ти живеш у столиці США.';
            break;
        case 'Лондон':
            return 'Ти живеш у столиці Великобританії.';
            break;
        default:
            return `Не чула про ${obj.city}, але ,мабуть, воно гарне.`;
    }
}

function sportAssertion(obj) {
    switch(obj.sport) {
        case 'Футбол':
            return 'Круто! Хочеш стати як Роналду?';
            break;
        case 'Теніс':
            return 'Круто! Хочеш стати як Світоліна?';
            break;
        case 'Бокс':
            return 'Круто! Хочеш стати як Кличко?';
            break;
        default:
            return `Піду почитаю, що таке ${obj.sport}`;
    }
}








