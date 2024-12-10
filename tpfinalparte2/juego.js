class Juego {
  constructor() {
    this.estado = "inicio"; // Pantalla inicial
    this.pantallas = {
      inicio: new PantallaInicio(this),
      juego: new PantallaJuego(this),
      victoria: new PantallaVictoria(this),
      derrota: new PantallaDerrota(this),
      creditos: new PantallaCreditos(this)
    };
  }

  iniciar() {
    this.pantallas.inicio.iniciar(); // Iniciar la pantalla de inicio
  }

  actualizar() {
    this.pantallas[this.estado].actualizar(); // Llamar a la actualización de la pantalla actual
  }

  dibujar() {
    this.pantallas[this.estado].dibujar(); // Dibujar la pantalla actual
  }

  cambiarPantalla(nuevaPantalla) {
    this.estado = nuevaPantalla; // Cambiar el estado (pantalla actual)
  }
}

// Clase JuegoActivo (La lógica del juego)
class JuegoActivo {
  constructor(juego) {
    this.juegoimg= loadImage("data/mordor.jpg");
    this.juego = juego;
    this.jugador = new Jugador();
    this.enemigos = [];
    this.puntuación = 0;
    for (let i = 0; i < 5; i++) {
      this.enemigos.push(new Enemigo(i * 100 + 100));
    }
  }

  iniciar() {
    this.jugador = new Jugador();
    this.enemigos = [];
    for (let i = 0; i < 5; i++) {
      this.enemigos.push(new Enemigo(i * 100 + 100));
    }
  }

  reiniciar() {
    this.iniciar();
  }

  actualizar() {
    this.jugador.mover();
    for (let enemigo of this.enemigos) {
      enemigo.actualizar();
      if (enemigo.golpea(this.jugador)) {
        this.juego.cambiarPantalla("derrota"); // Si el jugador choca con un enemigo, se va a la pantalla de derrota
      }
    }
    if (this.jugador.y <= 10) {
      this.juego.cambiarPantalla("victoria"); // Si el jugador llega a la parte superior, se va a la pantalla de victoria
    }
  }

  dibujar() {
    background(135, 206, 250); // Color de fondo (cielo)
     if (this.juegoimg) { 
    image(this.juegoimg, 0, 0, width, height); // Dibuja la imagen de fondo
  }
    this.jugador.dibujar();
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
    }
  }
}
