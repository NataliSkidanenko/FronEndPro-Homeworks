const form = document.forms.order;
const nameInput = form.name;
const postInput = form.postOffice;

nameInput.addEventListener('blur', validateName);
postInput.addEventListener('blur', validatePost);
form.addEventListener('submit', submitForm);

function validateName() {
    const regExp = /^[A-ZА-ЯІЇ\s]+$/i;
    const name = nameInput.value.trim();

    if (nameInput.nextElementSibling) {
        nameInput.nextElementSibling.remove();
    }

    if (!name) {
        nameInput.insertAdjacentHTML('afterend', '<p>Please fill in this field</p>');
        return false;
    }

    if (name && !regExp.test(name)) {
        nameInput.insertAdjacentHTML('afterend', '<p>Use only Latin letters</p>');
        return false;
    }

    return true;
}

function validatePost() {
    const regExp = /^[0-9]+$/;
    const postOffice = postInput.value.trim();

    if (postInput.nextElementSibling) {
        postInput.nextElementSibling.remove();
    }

    if (!postOffice) {
        postInput.insertAdjacentHTML('afterend', '<p>Please fill in this field</p>');
        return false;
    }

    if (postOffice && !regExp.test(postOffice)) {
        postInput.insertAdjacentHTML('afterend', '<p>Use only numbers without spaces</p>');
        return false;
    }

    return true;
}

function submitForm(ev) {
    ev.preventDefault();

    if (validateName() && validatePost() && selectProduct) {
        const name = nameInput.value.trim();
        const postOffice = postInput.value.trim();
        const city = form.city.value;
        const payment = form.payment.value;
        const number = form.number.value;
        form.classList.add('none-display');

        const order = {};
        order.productName = selectProduct.name;
        order.productId = selectProduct.id;
        order.number = number;
        order.client = name;
        order.city = city;
        order.post = postOffice;
        order.payment = payment;
        order.total = `${number * selectProduct.price}$`;
        order.date = new Date();

        const aboutOrder = document.querySelector('#about-order');
        aboutOrder.innerText = `${JSON.stringify(order)}`;
    }
}
