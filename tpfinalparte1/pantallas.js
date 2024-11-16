function pantallas(){
  textSize(15);
  //ruta principal
  if ( estado==1 ) {
    image(imagenes[estado], 80, 0, 480, 480);
    boton(280,370,100, 50);
    fill(255);
   text(texto[estado],120,40);
   text(texto[23],300,400);
  }
  if ( estado==2 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
   text(texto[estado],120,400);
   text(texto[24],300,350);
  }
  if ( estado==3 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(90,370,100, 50);
     boton(440,370,100, 50);
    fill(255);
       text(texto[estado],120,40);
       text(decision[1], 100,400);
       text(decision[2], 470,400);
}
  if ( estado==4 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
  if ( estado==7 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,350);
}
if ( estado==22 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
  if ( estado==8 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,350);
}
  if ( estado==9 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
  if ( estado==10 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(90,370,100, 50);
     boton(440,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
    text(decision[3], 100,400);
    text(decision[4], 438,390);
}
  if ( estado==11 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
 fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
  if ( estado==12 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
     fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,350);
}
if ( estado==21 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
     fill(255);
     text(texto[estado],300,300);
     text(texto[24],300,400);
}
if ( estado==13 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(90,370,100, 50);
     boton(440,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
    text(decision[5], 105,390);
    text(decision[6], 445,390);
}
  if ( estado==18 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
if ( estado==19 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,350);
}
if ( estado==20 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[25],300,400);
}


//ruta secndaria 1
if ( estado==5 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
if ( estado==6 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[25],300,350);
}

//ruta secndaria 2
if ( estado==14 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);

}
if ( estado==15 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[25],300,350);
}


//ruta secndaria 3
if ( estado==16 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,370,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[24],300,400);
}
if ( estado==17 ) {
    image(imagenes[estado], 80, 0, 480, 480);
     boton(280,320,100, 50);
    fill(255);
     text(texto[estado],120,40);
     text(texto[25],300,350);
}

}
function boton(posx,posy,tamx,tamy){
  fill(78,170,43);
  rect(posx,posy,tamx,tamy);
}
