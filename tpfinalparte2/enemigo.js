// Clases para los elementos del juego (Enemigos y Jugador)

class Enemigo {
  constructor(y) {
    this.x = random(width);
    this.y = y;
    this.width = 50;
    this.height = 30;
    this.vel = random(7, 13);
    this.orcoimg= loadImage("data/orco.png");
  }

  actualizar() {
    this.x += this.vel;
    if (this.x > width) {
      this.x = -this.width;
    }
  }

  dibujar() {

        if (this.orcoimg) { 
    image(this.orcoimg,this.x, this.y, this.width, this.height); // Dibuja la imagen de fondo
  }
  }

  golpea(jugador) {
    return (
      jugador.x < this.x + this.width &&
      jugador.x + jugador.tam > this.x &&
      jugador.y < this.y + this.height &&
      jugador.y + jugador.tam > this.y
    );
  }
}
