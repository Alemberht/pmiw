class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - 40; // Posición inicial Y
    this.tam = 30; // Tamaño del jugador
    this.vel = 5; // Velocidad del jugador
    this.jugaimg= loadImage("data/Frodo.png");
  }

  mover() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.vel; // Mover hacia arriba
      if (this.y < 0) {
        this.y = 0;
      }
    }
  }

  dibujar() {

    if (this.jugaimg) { 
    image(this.jugaimg,this.x, this.y, this.tam, this.tam); // Dibuja la imagen de fondo
  }
  }
}
