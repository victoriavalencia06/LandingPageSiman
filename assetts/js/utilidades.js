
const contenedor = document.querySelector('.rebajas-contenedor');
const left = document.querySelector('.slider-btn.left');
const right = document.querySelector('.slider-btn.right');

left.addEventListener('click', () => {
    contenedor.scrollBy({ left: -contenedor.offsetWidth, behavior: 'smooth' });
});

right.addEventListener('click', () => {
    contenedor.scrollBy({ left: contenedor.offsetWidth, behavior: 'smooth' });
});
