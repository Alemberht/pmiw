let juego;
//let musicaFondo;

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); // Crear una nueva instancia del juego
  juego.iniciar(); // Inicializar el juego

 // Cargar la música de fondo (asegúrate de tener el archivo de audio en tu proyecto)
//  musicaFondo = loadSound('audio.mp3', () => {
  //  musicaFondo.setLoop(true); // Configura la música para que se repita en bucle
   // musicaFondo.play(); // Reproduce la música de fondo
  //});
}

function draw() {
  juego.actualizar(); // Actualizar el estado del juego
  juego.dibujar(); // Dibujar la pantalla correspondiente
}

function mousePressed() {
  // Llamar a la función presionada de todos los botones en la pantalla actual
  let pantalla = juego.pantallas[juego.estado];
  if (pantalla && pantalla.botonInicio) {
    pantalla.botonInicio.presionado();
  }
  if (pantalla && pantalla.botonVictoria) {
    pantalla.botonVictoria.presionado();
  }
  if (pantalla && pantalla.botonDerrota) {
    pantalla.botonDerrota.presionado();
  }
  if (pantalla && pantalla.botonCreditos) {
    pantalla.botonCreditos.presionado();
  }
}
