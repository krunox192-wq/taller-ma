// Animaciones scroll
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
});

// WhatsApp formulario
document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = e.target[0].value;
    const telefono = e.target[1].value;
    const mensaje = e.target[2].value;

    const texto = `Hola, soy ${nombre}. Quiero cotizar un fofucho. Mi contacto: ${telefono}. Detalles: ${mensaje}`;

    window.open(`https://wa.me/528125888001?text=${encodeURIComponent(texto)}`);
});

// Botón flotante
document.getElementById("btnWhatsapp").href = "https://wa.me/528125888001";
