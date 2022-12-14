const productsContainer = document.querySelector('.products');
productsContainer.addEventListener('click', pushProductInHistory);
showProducts(data);

const productButtons = document.querySelectorAll('.product__btn');
productButtons.forEach((button) => button.addEventListener('click', addToCart));

function showProducts(data) {
    if (data.length) {
        data.forEach(({id, img, name, price, isActive}) => {
            const product = new MyCustomElement('div')
                .addClass('product')
                .setAttribute('data-product-id', id).node;

            product.insertAdjacentHTML(
                'beforeend',
                `<div class="product__title">${name}</div>
                    <div class="product__image">
                        <img src="https://api.lorem.space/image/shoes?w=500&h=500&hash=${img}" alt="Random picture">
                    </div>
                    <div class="product__price">${price} $</div>
                    <button class="product__btn" type="button" ${
                        isActive ? '' : 'disabled'
                    }>Add to cart</button>
                    `
            );
            productsContainer.appendChild(product);
        });
    }
}

function pushProductInHistory(e) {
    if (e.target.closest('.product')) {
        const productId = e.target.closest('.product').dataset.productId;
        window.history.pushState(productId, null, './product.html');
        window.location = './product.html';
    }
}

function addToCart(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}
