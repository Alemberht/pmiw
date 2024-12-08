let juego;  

function setup() {  
  createCanvas(400, 600);  
  juego = new Juego();  
}  

function draw() {  
  juego.actualizar();  
  juego.dibujar();  
}  
