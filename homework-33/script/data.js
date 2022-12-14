const data = [
    {id: 1, img: '500B67FB', name: 'Adipiscing non integer', price: 305, isActive: true},
    {id: 2, img: '8B7BCDC3', name: 'Molestie urna in', price: 290, isActive: false},
    {id: 3, img: 'A89D0DE6', name: 'Lacinia leo, non leo', price: 139, isActive: true},
    {id: 4, img: '225E6693', name: 'Amet, augue mauris ornar', price: 239, isActive: true},
    {id: 5, img: '9D9539E7', name: 'Molestie cursus interdum', price: 469, isActive: true},
    {id: 6, img: 'BDC01094', name: 'Amet non risus molestie', price: 249, isActive: false},
    {id: 7, img: '9D9539E7', name: 'Pellentesque mattis morbi', price: 235, isActive: false},
    {id: 8, img: 'BDC06094', name: 'Consectetur sit urna', price: 230, isActive: true},
    {id: 9, img: '1F5AE56A', name: 'Pellentesque accumsan in sed urna', price: 130, isActive: true},
    {id: 10, img: '4F32C4CF', name: 'Pellentesque mattis morbi', price: 130, isActive: true},
    {id: 11, img: 'B0E33EF4', name: 'Sodales arcu consectetur', price: 530, isActive: true},
    {id: 12, img: '23297A22', name: ' Luctus lacinia habitasse sit', price: 850, isActive: false},
    {id: 13, img: '9D8539E7', name: 'Cras efficitur interdum lectus', price: 295, isActive: true},
    {id: 14, img: '4F32C4CF', name: 'Habitasse luctus non malesuada', price: 235, isActive: true},
    {id: 15, img: '9D9839E7', name: 'Cras efficitur interdum', price: 135, isActive: false},
    {id: 16, img: '9D9519E2', name: 'Eleifend nunc tempus', price: 249, isActive: true},
];

class MyCustomElement {
    constructor(selector) {
        this.node = document.createElement(selector);
    }

    addClass(name) {
        this.node.classList.add(name);
        return this;
    }

    removeClass(name) {
        this.node.classList.remove(name);
        return this;
    }

    setAttribute(name, value) {
        this.node.setAttribute(name, value);
        return this;
    }

    removeAttribute(name) {
        this.node.removeAttribute(name);
        return this;
    }
}
