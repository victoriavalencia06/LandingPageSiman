function iniciarCarrusel(selector, intervalo = 4000) {
    const carrusel = document.querySelector(selector);
    const imagenes = carrusel.querySelectorAll('img');
    const indicadoresContainer = document.querySelector('.indicadores');
    let indice = 0;

    if (!carrusel || imagenes.length === 0 || !indicadoresContainer) return;

    // Limpiar y crear indicadores
    indicadoresContainer.innerHTML = '';
    imagenes.forEach((_, i) => {
        const punto = document.createElement('span');
        if (i === 0) punto.classList.add('activo');
        indicadoresContainer.appendChild(punto);
    });

    const puntos = indicadoresContainer.querySelectorAll('span');

    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;

        puntos.forEach((punto, i) => {
            punto.classList.toggle('activo', i === indice);
        });
    }, intervalo);
}

document.addEventListener("DOMContentLoaded", () => {
    const esMobile = window.innerWidth <= 768;

    if (esMobile) {
        iniciarCarrusel('.carrusel.mobile');
    } else {
        iniciarCarrusel('.carrusel.desktop');
    }
});
