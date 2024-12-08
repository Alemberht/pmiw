class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.enemigos = []; // Cambiar a 'enemigos' en plural
    this.puntuación = 0;
    for (let i = 0; i < 5; i++) {
      this.enemigos.push(new Enemigo(i * 100 + 100));
    }
  }

  actualizar() {
    this.jugador.mover();
    for (let enemigo of this.enemigos) {
      enemigo.actualizar();
      if (enemigo.golpea(this.jugador)) {
        alert("¡Perdiste!");
        noLoop();  // Termina el juego si el jugador choca con un enemigo
      }
    }
    console.log(this.jugador.y);
    if (this.jugador.y <= 10) {
      alert("¡Ganaste!");
      noLoop();  // Termina el juego si el jugador llega a la parte superior
    }
  }

  dibujar() {
    background(135, 206, 250);  // Color de fondo (cielo)
    this.jugador.dibujar();
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
    }
  }
}
