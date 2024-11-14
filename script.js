// script.js



// - En la página de "Acerca de" hacer un botón de "Leer más". Deberá mostrarse el currículum de manera abreviada y al hacer clic en el botón de leer más, 
// deberá revelarse el CV completo (rellenar con Lorem Ipsum si es necesario)
document.addEventListener("DOMContentLoaded", () => {
    const botonLeerMas = document.getElementById("boton-leer-mas");
    const contenidoCompleto = document.getElementById("contenido-completo");
    const resumen = document.querySelector(".resumen");

    botonLeerMas.addEventListener("click", () => {
        if (contenidoCompleto.style.display === "none") {
            contenidoCompleto.style.display = "block";  // Muestra el contenido completo
            resumen.style.display = "none";             // Oculta el resumen
            botonLeerMas.textContent = "Leer menos";    // Cambia el texto del botón
        } else {
            contenidoCompleto.style.display = "none";   // Oculta el contenido completo
            resumen.style.display = "block";            // Muestra solo el resumen
            botonLeerMas.textContent = "Leer más";      // Cambia el texto del botón
        }
    });
});



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




// Todo lo cargado en el formulario debe reflejarse en la tabla inferior al terminar de rellenar cada campo (sin necesidad de botones)
function mostrar() {

    // Nombre:
    console.log("Hola, este es un mensaje de prueba.");
    let variable_input_nombre = document.getElementById('input-nombre').value;
    let variable_nombre_tabla = document.getElementById('nombre-tabla');
    variable_nombre_tabla.innerHTML = variable_input_nombre;
    console.log("Debería resultar." + variable_input_nombre);

    // Apellido:
    let variable_input_apellido = document.getElementById('input-apellido').value;
    let variable_apellido_tabla = document.getElementById('apellido-tabla');
    variable_apellido_tabla.innerHTML = variable_input_apellido;

    // Email:
    let variable_input_email = document.getElementById('input-email').value;
    let variable_email_tabla = document.getElementById('email-tabla');
    variable_email_tabla.innerHTML = variable_input_email;

    // Teléfono:
    let variable_input_telefono = document.getElementById('input-telefono').value;
    let variable_telefono_tabla = document.getElementById('telefono-tabla');
    variable_telefono_tabla.innerHTML = variable_input_telefono;

    // Edad:
    let variable_input_edad = document.getElementById('input-edad').value;
    let variable_edad_tabla = document.getElementById('edad-tabla');
    variable_edad_tabla.innerHTML = variable_input_edad;

    // Dirección:
    let variable_input_direccion = document.getElementById('input-direccion').value;
    let variable_direccion_tabla = document.getElementById('direccion-tabla');
    variable_direccion_tabla.innerHTML = variable_input_direccion;

    // Pronvicia:
    let variable_input_provincia = document.getElementById('input-provincia').value;
    let variable_provincia_tabla = document.getElementById('provincia-tabla');
    variable_provincia_tabla.innerHTML = variable_input_provincia;
   
    // Código postal:
    let variable_input_codigo_postal = document.getElementById('input-codigo-postal').value;
    let variable_codigo_postal_tabla = document.getElementById('codigo-postal-tabla');
    variable_codigo_postal_tabla.innerHTML = variable_input_codigo_postal;

    // Método de contacto seleccionado:
    const variable_metodo_contacto = document.querySelector('input[name="metodo_contacto"]:checked');
    const variable_metodo_contacto_tabla = document.getElementById('radio-tabla');
    
    if (variable_metodo_contacto) {
        variable_metodo_contacto_tabla.textContent = variable_metodo_contacto.value;
    } else {
        variable_metodo_contacto_tabla.textContent = "No seleccionado";
    }

   // Tipos de suscripción seleccionados:
   const variable_opciones_de_avisos = document.querySelectorAll('input[name="opciones_de_avisos"]:checked');
   const valores_avisos = Array.from(variable_opciones_de_avisos).map(checkbox => checkbox.value);
   const variable_opciones_de_avisos_tabla = document.getElementById('opciones-de-avisos-tabla');
   
   variable_opciones_de_avisos_tabla.textContent = valores_avisos.length > 0 ? valores_avisos.join(", ") : "No seleccionados";

}




