class Enemigo {  
  constructor(y) {  
    this.x = random(width);  
    this.y = y;  
    this.width = 50;  
    this.height = 30;  
    this.vel = random(2, 5);  
  }  
  
  actualizar() {  
    this.x += this.vel;  
    if (this.x > width) {  
      this.x = -this.width;  
    }  
  }  
  
  dibujar() {  
    fill(255, 0, 0);  
    rect(this.x, this.y, this.width, this.height);  
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
