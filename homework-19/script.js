class ApartamentBuilding {
    constructor(street, number, floorsNumber, apartamentsNumber, dwellersNumber) {
        this.adress = {sreet: street, number: number};
        this.floorsNumber = floorsNumber;
        this.apartamentsNumber = apartamentsNumber;
        this.apartamentsArray = [0];
        this.dwellersNumber = dwellersNumber;
    }

    addApartamentInfo(apartament) {
        if (apartament.number > this.apartamentsNumber) {
            return;
        } else {
            this.apartamentsArray[apartament.number] = apartament;
        }
    }

    getApartament(number) {
        if (number > this.apartamentsNumber) {
            return `Такої квартири не існує`;
        }
        return this.apartamentsArray[number] ?? `Інфо про цю квартиру ще немає`;
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

    addDwellerInfo(dweller) {
        this.dwellersArray.push(dweller);
    }

    getDweellers() {
        return this.dwellersArray;
    }
}

class Dweller {
    constructor(firstName, lastName, birthDate, phone) {
        this.name = {firstName: firstName, lastName: lastName};
        this.birthDate = birthDate;
        this.phone = phone;
    }
}

const greenville = new ApartamentBuilding('Gmyri', 9, 12, 276, 604);

greenville.addApartamentInfo(new Apartament(7, 65, 48, 3));
greenville.addApartamentInfo(new Apartament(9, 54, 37, 1));
greenville.addApartamentInfo(new Apartament(12, 55, 37, 1));
greenville.addApartamentInfo(new Apartament(12, 202, 62, 3));
greenville.addApartamentInfo(new Apartament(56, 202, 62, 3));

greenville
    .getApartament(65)
    .addDwellerInfo(new Dweller('Anna', 'Kononenko', '26.10.1989', '099756474'));

greenville
    .getApartament(65)
    .addDwellerInfo(new Dweller('Denys', 'Kononenko', '02.03.1987', '0997836474'));

greenville
    .getApartament(54)
    .addDwellerInfo(new Dweller('Maria', 'Maslova', '23.10.1996', '099756474'));

greenville
    .getApartament(202)
    .addDwellerInfo(new Dweller('Anna', 'Voitenko', '02.03.1987', '099785474'));

greenville
    .getApartament(202)
    .addDwellerInfo(new Dweller('Anton', 'Voitenko', '02.03.1987', '099785474'));

console.log(greenville);
console.log(greenville.getApartament(54));
console.log(greenville.getApartament(54).getDweellers());
