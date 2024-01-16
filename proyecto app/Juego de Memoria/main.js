// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

// Elementos HTML
const mostrarmovimientos = document.getElementById("movimientos");
const mostraraciertos = document.getElementById("aciertos");

// Generación de números aleatorios
const numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros.sort(() => Math.random() - 0.5);

// Función para voltear una carta
function destapar(id) {
  tarjetasDestapadas++;

  if (tarjetasDestapadas === 1) {
    // Primer número
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    // Deshabilitar primer botón
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas === 2) {
    // Mostrar segundo número
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    // Deshabilitar segundo botón
    tarjeta2.disabled = true;

    // Incrementar movimientos
    movimientos++;
    mostrarmovimientos.textContent = `movimientos` + [movimientos];

    if (primerResultado === segundoResultado) {
      // Aumentar aciertos
      tarjetasDestapadas =0;
      aciertos++;
      mostraraciertos.textContent = `aciertos` + [aciertos];

      // Si se completan todas las parejas, finalizar el juego
      if (aciertos === numeros.length / 2) {
        // Mostrar mensaje de fin de juego
        // ...
      }
    } else {
      // Volver a tapar las cartas
      setTimeout(() => {
        tarjeta1.innerHTML = ` `;
        tarjeta2.innerHTML = ` `;
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 2000);
    }
  }
}
