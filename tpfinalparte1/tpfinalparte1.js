//https://youtu.be/7kRdbvsTPGw

let estado=1;
let imagenes = [];
let texto = [];
let decision = [];
let sonido;

function preload() {
   for (let i = 1; i < 23; i++) {
    imagenes[i] = loadImage("data/Designer_"+nf(i,2)+".png");
  
  }
     sonido = loadSound('data/audio.mp3');

}

function setup() {
createCanvas(640,480);
textos();

  }


function draw() {
 background(200);
  pantallas();
  
}

function mousePressed() {
  estado = manejarTransiciones(estado);
//  PRINCIPAL
  
  

  }
