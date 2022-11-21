const orders = document.querySelector('#orders');
const buttonOrders = document.querySelector('#orders-button');
const buttonCatalog = document.querySelector('#catalog-button');
const ordersBlock = document.querySelector('#orders-list');

buttonOrders.addEventListener('click', showOrdersHistory);
buttonCatalog.addEventListener('click', showCatalog);
ordersBlock.addEventListener('click', showOrderInfo);
ordersBlock.addEventListener('click', deleteFromHistory);

function showOrdersHistory() {
    if (!localStorage.getItem('orders')) {
        const error = document.querySelector('#orders-error');
        error.classList.remove('invisible');
        setTimeout(() => {
            error.classList.add('invisible');
        }, 2000);
        return;
    }

    const ordersArray = Array.from(JSON.parse(localStorage.getItem('orders')));
    orders.classList.remove('none-display');
    catalog.classList.add('none-display');
    buttonOrders.classList.add('none-display');
    buttonCatalog.classList.remove('none-display');
    ordersBlock.innerHTML = '';
    ordersArray.forEach((order) => {
        ordersBlock.insertAdjacentHTML(
            'beforeend',
            `<li data-order-id=${order.orderId}>
                <p class='price'>${order.total}$</p>
                <p class='date'>${order.date.split('T')[0]}</p>
                <p class='time'>${order.date.split('T')[1].split('.')[0]}</p>
                <button id="delete-history">Delete</button>
            </li>`
        );
    });
}

function showCatalog() {
    catalog.classList.remove('none-display');
    buttonOrders.classList.remove('none-display');
    buttonCatalog.classList.add('none-display');
    orders.classList.add('none-display');
}

function showOrderInfo(ev) {
    if (ev.target.nodeName !== 'UL') {
        let orderId;
        if (ev.target.nodeName === 'P') {
            orderId = Number(ev.target.parentNode.dataset.orderId);
        } else {
            orderId = Number(ev.target.dataset.orderId);
        }
        console.log(ev);
        const ordersArray = Array.from(JSON.parse(localStorage.getItem('orders')));
        const orderInfo = document.querySelector('#order-info');
        const productInfo = document.querySelector('#product-info');
        orderInfo.innerHTML = '';
        productInfo.innerHTML = '';
        orderInfo.classList.remove('invisible');
        productInfo.classList.remove('invisible');

        ordersArray.forEach((order) => {
            if (order.orderId === orderId) {
                orderInfo.insertAdjacentHTML(
                    'beforeend',
                    `<p>Client: ${order.client}</p>
                    <p>City: ${order.city}</p>
                    <p>Post office: ${order.post}</p>
                    <p>Payment method: ${order.payment}</p>`
                );
                productInfo.insertAdjacentHTML(
                    'beforeend',
                    `<p>Product: ${order.product.name}</p>
                    <p>Number: ${order.number}</p>
                    <p>Price: ${order.product.price}$</p>
                    <p>Descriptiom: ${order.product.description}</p>`
                );
                return;
            }
        });
    }
}

function deleteFromHistory(ev) {
    if (ev.target.nodeName === 'BUTTON') {
        const orderId = Number(ev.target.parentNode.dataset.orderId);
        const ordersArray = Array.from(JSON.parse(localStorage.getItem('orders')));

        ordersArray.forEach((order, index) => {
            if (order.orderId === orderId) {
                ordersArray.splice(index, 1);
                return;
            }
        });

        localStorage.setItem('orders', JSON.stringify(ordersArray));
        showOrdersHistory();
    }
}
