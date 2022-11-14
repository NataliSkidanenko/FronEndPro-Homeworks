const input = document.querySelector('.form--url input');
const button = document.querySelector('.form--url button');

button.addEventListener('click', goToPage);

function goToPage() {
    const url = input.value;
    const https = 'https://';

    if (url.startsWith('https://') || url.startsWith('http://')) {
        document.location.assign(url);
    } else {
        document.location.assign(`${https}${url}`);
    }
}
