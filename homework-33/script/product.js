showProductInfo(data);

function showProductInfo(data) {
    const productId = Number(history.state);
    const productContainer = document.querySelector('.product');
    console.log(history.state);
    data.forEach(({id, img, name, price, isActive}) => {
        if (id === productId) {
            productContainer.insertAdjacentHTML(
                'beforeend',
                `<div class="product__title">${name}</div>
                    <div class="product__image">
                        <img src="https://api.lorem.space/image/shoes?w=500&h=500&hash=${img}" alt="Random picture">
                    </div>
                    <div class="product__price">${price} $</div>
                    <button class="product__btn" type="button" ${
                        isActive ? '' : 'disabled'
                    }>Add to cart</button>`
            );
        }
    });
}
