const input = document.querySelector('.form--url input');
const button = document.querySelector('.form--url button');

button.addEventListener('click', goToPage);

function goToPage() {
    const url = input.value.replace(/http(s):\/\//i, '');
    const https = 'https://';
    document.location.assign(`${https}${url}`);
}
