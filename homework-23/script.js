const IMAGES = [
    {src: 'dog1.jpeg', alt: 'dog1'},
    {src: 'dog2.jpeg', alt: 'dog2'},
    {src: 'dog3.jpeg', alt: 'dog3'},
    {src: 'dog4.jpeg', alt: 'dog4'},
    {src: 'dog5.jpeg', alt: 'dog5'},
    {src: 'dog6.jpeg', alt: 'dog6'},
];

function generateImg() {
    const num = Math.floor(Math.random() * IMAGES.length);
    return IMAGES[num];
}

const img = document.querySelector('.img');
const newImg = generateImg();

img.setAttribute('src', `img/${newImg.src}`);
img.setAttribute('alt', newImg.alt);
