const form = document.forms.registration;
form.name.addEventListener('blur', validateName);
form.date.max = `${new Date().toISOString().split('T')[0]}`;
form.addEventListener('submit', saveAndShow);

function validateName() {
    const regExp = /^[A-ZА-ЯІЇ\s-]+$/i;
    const name = form.name.value.trim();

    if (form.name.nextElementSibling) {
        if (form.name.nextElementSibling.classList.contains('error')) {
            form.name.nextElementSibling.remove();
        }
    }

    if (!name) {
        form.name.insertAdjacentHTML('afterend', '<p class="error">Заповніть це поле</p>');
        return false;
    }

    if (name && !regExp.test(name)) {
        form.name.insertAdjacentHTML(
            'afterend',
            '<p class="error">Використовуйте тільки букви та "-"</p>'
        );
        return false;
    }

    return true;
}

function saveAndShow(ev) {
    ev.preventDefault();
    if (validateName()) {
        const info = {};
        info.name = form.name.value.trim();
        info.date = form.date.value;
        info.sex = form.sex.value;
        info.adress = form.adress.value;
        info.languages = getAllCheckBoxes('registration', 'language');

        form.classList.add('none-display');
        createTable(info);
    }
}

function getAllCheckBoxes(formId, inputClass) {
    const checkBoxes = document.querySelectorAll(`#${formId} .${inputClass}:checked`);
    console.log(checkBoxes);
    return Array.from(checkBoxes).map((el) => el.value);
}

function createTable(obj) {
    const table = document.querySelector('#info');
    for (const key in obj) {
        const row = table.insertRow();
        row.insertCell().innerText = key;
        if (Array.isArray(obj[key]) && obj[key].length) {
            row.insertCell().innerText = obj[key];
        } else if (!Array.isArray(obj[key]) && obj[key]) {
            row.insertCell().innerText = obj[key];
        } else {
            row.insertCell().innerText = 'Не вказано';
        }
    }
}
