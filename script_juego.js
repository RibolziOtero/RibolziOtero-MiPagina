// Juego de adivinanzas de números:
let randomNumber = Math.floor(Math.random() * 20) + 1; // Número aleatorio entre 1 y 100
let attemptsLeft = 5; // Intentos disponibles

// Función que se ejecuta cuando el usuario hace una adivinanza
function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let resultMessage = document.getElementById("result");
    let attemptsMessage = document.getElementById("attempts-left");

    // Verificamos si la adivinanza es correcta o no
    if (isNaN(guess)) {
        resultMessage.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Si el número es correcto, mostramos el mensaje y detenemos el juego
    if (guess === randomNumber) {
        resultMessage.textContent = "¡Felicidades, adivinaste el número!";
        resultMessage.style.color = "green";
        document.getElementById("guess").disabled = true; // Desactiva el input
        return; // Salimos de la función para evitar que se resten más intentos
    } 

    // Si el número no es correcto, mostramos pistas
    if (guess > randomNumber) {
        resultMessage.textContent = "El número es más bajo, intenta de nuevo.";
        resultMessage.style.color = "orange";
    } else {
        resultMessage.textContent = "El número es más alto, intenta de nuevo.";
        resultMessage.style.color = "orange";
    }

    // Restamos un intento
    attemptsLeft--;
    attemptsMessage.textContent = attemptsLeft;

    // Si se acabaron los intentos
    if (attemptsLeft === 0) {
        resultMessage.textContent = `¡Se acabaron los intentos! El número era ${randomNumber}.`;
        resultMessage.style.color = "red";
        document.getElementById("guess").disabled = true; // Desactiva el input
    }
    
    // Limpiamos el campo de entrada
    document.getElementById("guess").value = '';
}


// Función para reiniciar el juego
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1; // Generar un nuevo número
    attemptsLeft = 5; // Reiniciar los intentos

    document.getElementById("result").textContent = ''; // Limpiar mensaje de resultado
    document.getElementById("attempts-left").textContent = attemptsLeft; // Restablecer intentos
    document.getElementById("guess").value = ''; // Limpiar el campo de entrada
    document.getElementById("guess").disabled = false; // Habilitar el campo de entrada
}
