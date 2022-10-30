class ApartamentBuilding {
    constructor(street, number, floorsNumber, apartamentsNumber, dwellersNumber) {
        this.adress = {sreet: street, number: number};
        this.floorsNumber = floorsNumber;
        this.apartamentsNumber = apartamentsNumber;
        this.apartamentsArray = [];
        this.dwellersNumber = dwellersNumber;
    }

    addApartament(apartament) {
        if (apartament.number > this.apartamentsNumber) {
            console.log('Квартира з таким номером не може існувати');
            return;
        } else {
            this.apartamentsArray[apartament.number] = apartament;
        }
    }

    getApartament(number) {
        if (number > this.apartamentsNumber) {
            console.log('Такої квартири не існує');
            return;
        }

        if (this.apartamentsArray[number] === undefined) {
            console.log('Інфо про цю квартиру ще немає');
            return;
        }

        return this.apartamentsArray[number];
    }
}

class Apartament {
    constructor(floor, number, area, roomsNumber) {
        this.floor = floor;
        this.number = number;
        this.area = area;
        this.roomsNumber = roomsNumber;
        this.dwellersArray = [];
    }

    addDweller(dweller) {
        this.dwellersArray.push(dweller);
    }

    getDweellers() {
        return this.dwellersArray;
    }
}

class Dweller {
    constructor(firstName, lastName, birthDate, phone) {
        this.name = {firstName: firstName, lastName: lastName};
        this.birthDate = new Date(birthDate);
        this.phone = phone;
    }
}

const greenville = new ApartamentBuilding('Gmyri', 9, 12, 276, 604);

greenville.addApartament(new Apartament(7, 65, 48, 3));
greenville.addApartament(new Apartament(9, 54, 37, 1));
greenville.addApartament(new Apartament(12, 55, 37, 1));
greenville.addApartament(new Apartament(12, 202, 62, 3));
greenville.addApartament(new Apartament(56, 202, 62, 3));

greenville
    .getApartament(65)
    .addDweller(new Dweller('Anna', 'Kononenko', '1989-10-26', '099756474'));

greenville
    .getApartament(65)
    .addDweller(new Dweller('Denys', 'Kononenko', '1999-09-03', '0997836474'));

greenville
    .getApartament(54)
    .addDweller(new Dweller('Maria', 'Maslova', '1975-03-02', '09973356474'));

greenville
    .getApartament(202)
    .addDweller(new Dweller('Anna', 'Voitenko', '1975-03-02', '099785474'));

greenville
    .getApartament(202)
    .addDweller(new Dweller('Anton', 'Voitenko', '1989-10-26', '099785474'));

console.log(greenville);

//існуюючі дані
console.log(greenville.getApartament(54));
console.log(greenville.getApartament(54).getDweellers());

//неіснуюючі дані
console.log(greenville.getApartament(303));
console.log(greenville.getApartament(196).getDweellers());
