function iniciarCarrusel(selector, intervalo = 3000) {
    const carrusel = document.querySelector(selector);
    const imagenes = carrusel.querySelectorAll('img');
    const indicadoresContainer = document.querySelector('.indicadores');
    let indice = 0;
    let intervaloId;

    if (!carrusel || imagenes.length === 0 || !indicadoresContainer) return;

    // Limpiar y crear indicadores
    indicadoresContainer.innerHTML = '';
    imagenes.forEach((_, i) => {
        const punto = document.createElement('span');
        if (i === 0) punto.classList.add('activo');
        punto.addEventListener('click', () => {
            clearInterval(intervaloId);
            indice = i;
            actualizarCarrusel();
            reiniciarIntervalo();
        });
        indicadoresContainer.appendChild(punto);
    });

    const puntos = indicadoresContainer.querySelectorAll('span');

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
        
        puntos.forEach((punto, i) => {
            punto.classList.toggle('activo', i === indice);
        });
    }

    function reiniciarIntervalo() {
        clearInterval(intervaloId);
        intervaloId = setInterval(() => {
            indice = (indice + 1) % imagenes.length;
            actualizarCarrusel();
        }, intervalo);
    }

    // Iniciar el intervalo
    reiniciarIntervalo();
}

document.addEventListener("DOMContentLoaded", () => {
    // Verificar el tamaño de la pantalla y cargar el carrusel adecuado
    function verificarYConfigurarCarrusel() {
        const esMobile = window.innerWidth <= 768;
        
        // Ocultar todos los carruseles primero
        document.querySelectorAll('.carrusel').forEach(c => {
            c.style.display = 'none';
        });
        
        // Mostrar solo el carrusel adecuado
        if (esMobile) {
            document.querySelector('.carrusel.mobile').style.display = 'flex';
            iniciarCarrusel('.carrusel.mobile');
        } else {
            document.querySelector('.carrusel.desktop').style.display = 'flex';
            iniciarCarrusel('.carrusel.desktop');
        }
    }

    // Configurar inicialmente
    verificarYConfigurarCarrusel();
    
    // Volver a configurar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', verificarYConfigurarCarrusel);
});