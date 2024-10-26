// script.js


// Selecciona todos los botones con la clase 'boton-subir'
const botones = document.querySelectorAll('.boton-subir');
// Agrega un evento a cada botón:
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Efecto suave al desplazarse
        });
    });
});

// Función que actualiza el valor mostrado del control de rango de edad:
// (Funciona solo para un id específico)
document.getElementById('edad').addEventListener('input', function() {
    document.getElementById('valorEdad').textContent = this.value;
});
