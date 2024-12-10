// Clase Botón
class Boton {
  constructor(texto, x, y, ancho, alto, accion) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.accion = accion;
  }

  mostrar() {
    fill(200);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  presionado() {
    let dentro = mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
    if (dentro && mouseIsPressed) {
      this.accion(); // Ejecutar la acción si el botón es presionado
    }
  }
}
