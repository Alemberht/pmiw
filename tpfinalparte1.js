let estado=1;
let imagenes = [];
let texto = [];
let decision = [];

function preload() {
   for (let i = 1; i < 23; i++) {
    imagenes[i] = loadImage("data/Designer_"+nf(i,2)+".png");
  }

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
  
//  PRINCIPAL
 
 if(estado==1 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//1 a 2
    estado=2;
  }
  if(estado==2 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//2 a 3
    estado=3;
  }
  if(estado==3 && mouseX>90 && mouseX<190 &&  mouseY>370 && mouseY < 420){//3 a 4
    estado=4;
  }
  if(estado==4 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//4 a 7
    estado=7;
}
 if(estado==7 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//7 a 22
    estado=22;
}
if(estado==22 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//22 a 8
    estado=8;
}
if(estado==8 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//8 a 9
    estado=9;
}
if(estado==9 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//9 a 10
    estado=10;
}
if(estado==10 && mouseX>90 && mouseX<190 &&  mouseY>370 && mouseY < 420){//10 a 11
    estado=11;
  }
  if(estado==11 && mouseX>90 && mouseX<190 &&  mouseY>370 && mouseY < 420){//11 a 12
    estado=12;
  }
   if(estado==12 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//12 a 21
    estado=21;
  }
   if(estado==21 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//21 a 13
    estado=13;
  }
  if(estado==13 && mouseX>90 && mouseX<190 &&  mouseY>370 && mouseY < 420){//13 a 18
    estado=18;
}
 if(estado==18 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//18 a 19
    estado=19;
  }
   if(estado==19 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//19 a 20
    estado=20;
  }
 if(estado==20 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//20 a 1
    estado=1;
  }
  
  
  //RAMA 1
  
   if(estado==3 && mouseX>440 && mouseX<540 &&  mouseY>370 && mouseY < 420){//3 a 5
    estado=5;
  }
  if(estado==5 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//1 a 2
    estado=6;
  }
    if(estado==6 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//2 a 3
    estado=1;
  }
  
  //RAMA 2
  if(estado==10 && mouseX>440 && mouseX<540 &&  mouseY>370 && mouseY < 420){//13 a 14
    estado=14;
  }
  if(estado==14 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//14 a 15
    estado=15;
  }
    if(estado==15 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//15 a 1
    estado=1;
  }
  
  //RAMA 3
  if(estado==10 && mouseX>440 && mouseX<540 &&  mouseY>370 && mouseY < 420){//13 a 14
    estado=14;
  }
  if(estado==14 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//14 a 15
    estado=15;
  }
    if(estado==15 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//15 a 1
    estado=1;
  }
  
   if(estado==13 && mouseX>440 && mouseX<540 &&  mouseY>370 && mouseY < 420){//13 a 16
    estado=16;
  }
  if(estado==16 && mouseX>280 && mouseX<380 &&  mouseY>370 && mouseY < 420){//16 a 17
    estado=17;
  }
    if(estado==17 && mouseX>280 && mouseX<380 &&  mouseY>320 && mouseY < 370){//17 a 1
    estado=1;
  }
}
