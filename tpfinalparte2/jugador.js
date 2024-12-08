class Jugador {  
  constructor() {  
    this.x = width / 2;  
    this.y = height - 40; // Posición inicial Y  
    this.tam = 30; // Tamaño del jugador  
    this.vel = 5; // Velocidad del jugador  
  }  
  
  mover() {  
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {  
      this.x -= this.vel; // Mover a la izquierda  
    }  
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.tam) {  
      this.x += this.vel; // Mover a la derecha  
    }  
    if (keyIsDown(UP_ARROW) ) {  
      this.y -= this.vel; // Mover hacia arriba  
      if (this.y<0) {
       this.y=0; 
      }
    }  
  }  
  
  dibujar() {  
    fill(0, 255, 0); // Color del jugador (verde)  
    rect(this.x, this.y, this.tam, this.tam); // Dibujar al jugador  
  }  
}  
