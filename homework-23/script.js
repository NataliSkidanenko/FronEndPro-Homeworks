const IMAGES = [
    {src: 'img/dog1.jpeg', alt: 'dog1'},
    {src: 'img/dog2.jpeg', alt: 'dog2'},
    {src: 'img/dog3.jpeg', alt: 'dog3'},
    {src: 'img/dog4.jpeg', alt: 'dog4'},
    {src: 'img/dog5.jpeg', alt: 'dog5'},
    {src: 'img/dog6.jpeg', alt: 'dog6'},
];

function generateImg() {
    const num = Math.floor(Math.random() * IMAGES.length);
    return IMAGES[num];
}

const img = document.querySelector('.img');
const newImg = generateImg();

img.setAttribute('src', newImg.src);
img.setAttribute('alt', newImg.alt);
