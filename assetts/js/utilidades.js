document.querySelectorAll('.rebajas-wrapper').forEach(wrapper => {
    const contenedor = wrapper.querySelector('.rebajas-contenedor');
    const left = wrapper.querySelector('.slider-btn.left');
    const right = wrapper.querySelector('.slider-btn.right');

    left.addEventListener('click', () => {
        contenedor.scrollBy({ left: -contenedor.offsetWidth, behavior: 'smooth' });
    });

    right.addEventListener('click', () => {
        contenedor.scrollBy({ left: contenedor.offsetWidth, behavior: 'smooth' });
    });
});
