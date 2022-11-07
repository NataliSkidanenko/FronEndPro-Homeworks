// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

const input = document.querySelector('.input');
const ghost = document.querySelector('.ghost');

function hideElement(element) {
    element.classList.remove('visible');
    element.classList.add('invisible');
}

function showElement(element) {
    element.classList.remove('invisible');
    element.classList.add('visible');
}

input.addEventListener('focus', () => showElement(ghost));
input.addEventListener('blur', () => hideElement(ghost));
