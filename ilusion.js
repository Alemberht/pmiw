
function ilusion() {
  image(imagenilusion, 0, 0, 400, 700);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      let x = 400 + (i * 50); 
      let y = 0 + (j * 100); 

      for (let k = 0; k < 50; k++) {
        let inter = map(k, 0, 40, 0, 1);
        let c = lerpColor(color(255), color(0), inter);
        stroke(c);
        line(x + k, y, x + k, y + 50);
        if (mouseIsPressed) {
          let incremento = xsuma();
          console.log(incremento); // Imprime el valor retornado
          x += incremento;
        }
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      let x = 400 + (i * 50); 
      let y = 50 + (j * 100); 

      for (let k = 0; k < 50; k++) {
        let inter = map(k, 0, 40, 0, 1);
        let c = lerpColor(color(0), color(255), inter);
        stroke(c);
        line(x + k, y, x + k, y + 50);
        if (mouseIsPressed) {
          let incremento = xsuma();
          console.log(incremento); // Imprime el valor retornado
          x += incremento;
        }
      }
    }
  }
}

function xsuma() {
  return 1;
}
