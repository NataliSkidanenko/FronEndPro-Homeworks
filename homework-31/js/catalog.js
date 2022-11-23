const categories = [
    {
        id: 1,
        category: 'Toys',
    },
    {
        id: 2,
        category: 'Sports',
    },
    {
        id: 3,
        category: 'Toys',
    },
    {
        id: 4,
        category: 'Grocery',
    },
    {
        id: 5,
        category: 'Garden',
    },
];

const products = [
    {
        id: 1,
        category_id: 2,
        name: 'Eggplant - Asian',
        price: 362,
        description:
            'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    },
    {
        id: 2,
        category_id: 5,
        name: 'Jagermeister',
        price: 34,
        description:
            'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    },
    {
        id: 3,
        category_id: 2,
        name: 'Wine - Lou Black Shiraz',
        price: 14,
        description:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    },
    {
        id: 4,
        category_id: 3,
        price: 73,
        name: 'Beef - Ox Tongue',
        description:
            'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    {
        id: 5,
        category_id: 3,
        name: 'Beef - Bones, Marrow',
        price: 56,
        description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    {
        id: 6,
        category_id: 2,
        name: 'Appetizer - Shrimp Puff',
        price: 32,
        description:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    },
    {
        id: 7,
        category_id: 4,
        name: 'Appetizer - Shrimp Puff',
        price: 95,
        description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    },
    {
        id: 8,
        category_id: 1,
        name: 'Ecolab - Ster Bac',
        price: 52,
        description: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    },
    {
        id: 9,
        category_id: 4,
        name: 'Vegetable - Base',
        price: 94,
        description:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    },
    {
        id: 10,
        category_id: 3,
        name: 'Flour - Corn, Fine',
        price: 12,
        description:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    },
    {
        id: 11,
        category_id: 1,
        name: 'Beer - Guiness',
        price: 84,
        description:
            'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: 12,
        category_id: 4,
        name: 'Napkin White',
        price: 26,
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    {
        id: 13,
        category_id: 2,
        name: 'Oil - Truffle, White',
        price: 24,
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    {
        id: 14,
        category_id: 5,
        name: 'Wine - Puligny Montrachet A.',
        price: 83,
        description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    },
    {
        id: 15,
        category_id: 5,
        name: 'Tomatoes Tear Drop',
        price: 78,
        description:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    },
];

const catalog = document.querySelector('#catalog');
const categoriesBlock = document.querySelector('#categories');
const productsBlock = document.querySelector('#products');
const infoBlock = document.querySelector('#info');
const buttonBuy = document.querySelector('#buy-button');
const form = document.forms.order;

let selectProduct;

categoriesBlock.addEventListener('click', showProducts);
productsBlock.addEventListener('click', showProductInfo);
buttonBuy.addEventListener('click', buy);

categories.forEach((element) => {
    categoriesBlock.insertAdjacentHTML(
        'beforeend',
        `<li data-category-id=${element.id}>${element.category}</li>`
    );
});

function showProducts(ev) {
    if (ev.target.nodeName === 'LI') {
        infoBlock.classList.add('invisible');
        productsBlock.classList.remove('invisible');
        productsBlock.innerHTML = '';
        products.forEach((element) => {
            if (element.category_id === Number(ev.target.dataset.categoryId)) {
                productsBlock.insertAdjacentHTML(
                    'beforeend',
                    `<li data-product-id=${element.id}>${element.name} | ${element.price}$</li>`
                );
            }
        });
    }
}

function showProductInfo(ev) {
    const descriptionBlock = document.querySelector('#description');
    if (ev.target.nodeName === 'LI') {
        descriptionBlock.innerHTML = '';
        infoBlock.classList.remove('invisible');
        products.forEach((element) => {
            if (element.id === Number(ev.target.dataset.productId)) {
                descriptionBlock.innerHTML = element.description;
                selectProduct = element;
            }
        });
    }
}

function buy() {
    const selectProductName = document.querySelector('#product-name');
    const selectProductPrice = document.querySelector('#product-price');
    const aboutOrder = document.querySelector('#about-order');

    infoBlock.classList.add('invisible');
    productsBlock.classList.add('invisible');
    selectProductName.innerText = `${selectProduct.name}`;
    selectProductPrice.innerText = `${selectProduct.price}$/piece`;
    form.classList.remove('none-display');
    aboutOrder.innerText = '';
}
