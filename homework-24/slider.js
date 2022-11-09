const IMAGES = [
    {src: 'img/nature-1.jpg', alt: 'nature-1'},
    {src: 'img/nature-2.jpg', alt: 'nature-2'},
    {src: 'img/nature-3.jpg', alt: 'nature-3'},
    {src: 'img/nature-4.jpg', alt: 'nature-4'},
    {src: 'img/nature-5.jpg', alt: 'nature-5'},
    {src: 'img/nature-6.jpg', alt: 'nature-6'},
];

const buttonNext = document.querySelector('.slider .next');
const buttonPrev = document.querySelector('.slider .prev');
const img = document.querySelector('.slider .img');

let index = 0;
img.setAttribute('src', IMAGES[index].src);
img.setAttribute('alt', IMAGES[index].alt);

buttonNext.addEventListener('click', () => {
    if (index === IMAGES.length - 2) {
        buttonNext.classList.add('hidden');
    }

    index = index + 1;
    img.setAttribute('src', IMAGES[index].src);
    img.setAttribute('alt', IMAGES[index].alt);

    if (index === 1) {
        buttonPrev.classList.remove('hidden');
    }
});

buttonPrev.addEventListener('click', () => {
    if (index === 1) {
        buttonPrev.classList.add('hidden');
    }

    index = index - 1;
    img.setAttribute('src', IMAGES[index].src);
    img.setAttribute('alt', IMAGES[index].alt);

    if (index === IMAGES.length - 2) {
        buttonNext.classList.remove('hidden');
    }
});
