let estado=0;
let imagenes = [];


function preload() {
   for (let i = 0; i < 20; i++) {
    imagenes[i] = loadImage("data/Designer_"+nf(i,2)+".png");
  }

  }

function setup() {
createCanvas(640,480);

}


function draw() {
 Background(200);
 image(imagenes[estado], 0, 0);
  
 
  
}
