class Person {
    constructor(firstName, lastName, dateBirth) {
        this.name = {firstName: firstName, lastName: lastName};
        this._dateBirth = new Date(dateBirth);
    }

    get age() {
        const now = new Date();

        if (
            now.getMonth() >= this._dateBirth.getMonth() &&
            now.getDate() > this._dateBirth.getDate()
        ) {
            return now.getFullYear() - new Date(this._dateBirth).getFullYear();
        }
        return now.getFullYear() - new Date(this._dateBirth).getFullYear() - 1;
    }
}

const person = new Person('Inna', 'Petrenko', '1996-10-26');
console.group('Створюємо нову людину:');
console.log(person);
console.log(`Цій людині ${person.age} років`);
console.groupEnd();

class Car {
    constructor(make, model, color, license) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.license = license;
        this.owner = 'Не присвоєно';
    }

    getInfo() {
        console.group(`Автомобіль ${this.make}:`);
        console.log(`Модель: ${this.model}`);
        console.log(`Колір: ${this.color} `);
        console.log(`Номер: ${this.license}`);
        console.log(
            `Власник: ${
                this.owner === 'Не присвоєно'
                    ? 'невідомий'
                    : `${this.owner.name.firstName} ${this.owner.name.lastName}`
            }`
        );
        console.groupEnd();
    }

    addOwner(object) {
        if (object.age < 18) {
            console.log('Не вдалось присвоїти власника!');
            return;
        }
        console.log('Власника присвоєно');
        this.owner = object;
    }
}

const car = new Car('Audi', 'Q5', 'red', 'BT-73627');
const personYoung = new Person('Fedir', 'Yakymchuk', '2010-12-03');

console.log(car.getInfo());
car.addOwner(personYoung); //Не вдалось присвоїти власника!
car.addOwner(person);
console.log(car.getInfo());
