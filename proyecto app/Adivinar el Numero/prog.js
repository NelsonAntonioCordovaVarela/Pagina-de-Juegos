const numeroGenerado = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const mensaje = document.querySelector('.mensaje');
const numeroInput = document.querySelector('#numero');
const scoreSpan = document.querySelector('#score');
const numeroGeneradoSpan = document.querySelector('#numero-generado');

const btnAdivinar = document.querySelector('#btn-adivinar');

btnAdivinar.addEventListener('click', () => {
  intentos++;
  scoreSpan.textContent = intentos;

  const numeroUsuario = parseInt(numeroInput.value);

  if (numeroUsuario === numeroGenerado) {
    mensaje.textContent = "¡Felicidades, has adivinado el número en " + intentos + " intentos!";
    numeroGeneradoSpan.textContent = numeroGenerado;
    btnAdivinar.disabled = true;
  } else if (numeroUsuario > numeroGenerado) {
    mensaje.textContent = "El número que buscas es menor";
  } else {
    mensaje.textContent = "El número que buscas es mayor";
  }
});
