function manejarTransiciones(estadoActual) {
  // PRINCIPAL
  if (estadoActual == 1 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 1 a 2
    sonido.play(true);
    return 2;
  }
  if (estadoActual == 2 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 2 a 3
    return 3;
  }
  if (estadoActual == 3 && mouseX > 90 && mouseX < 190 && mouseY > 370 && mouseY < 420) { // 3 a 4
    return 4;
  }
  if (estadoActual == 4 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 4 a 7
    return 7;
  }
  if (estadoActual == 7 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 7 a 22
    return 22;
  }
  if (estadoActual == 22 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 22 a 8
    return 8;
  }
  if (estadoActual == 8 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 8 a 9
    return 9;
  }
  if (estadoActual == 9 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 9 a 10
    return 10;
  }
  if (estadoActual == 10 && mouseX > 90 && mouseX < 190 && mouseY > 370 && mouseY < 420) { // 10 a 11
    return 11;
  }
  if (estadoActual == 11 && mouseX > 90 && mouseX < 190 && mouseY > 370 && mouseY < 420) { // 11 a 12
    return 12;
  }
  if (estadoActual == 12 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 12 a 21
    return 21;
  }
  if (estadoActual == 21 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 21 a 13
    return 13;
  }
  if (estadoActual == 13 && mouseX > 90 && mouseX < 190 && mouseY > 370 && mouseY < 420) { // 13 a 18
    return 18;
  }
  if (estadoActual == 18 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 18 a 19
    return 19;
  }
  if (estadoActual == 19 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 19 a 20
    return 20;
  }
  if (estadoActual == 20 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 20 a 1
    return 1;
  }

  // RAMA 1

  if (estadoActual == 3 && mouseX > 440 && mouseX < 540 && mouseY > 370 && mouseY < 420) { // 3 a 5
    return 5;
  }
  if (estadoActual == 5 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 5 a 6
    return 6;
  }
  if (estadoActual == 6 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 6 a 1
    return 1;
  }

  // RAMA 2
  if (estadoActual == 10 && mouseX > 440 && mouseX < 540 && mouseY > 370 && mouseY < 420) { // 10 a 14
    return 14;
  }
  if (estadoActual == 14 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 14 a 15
    return 15;
  }
  if (estadoActual == 15 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 15 a 1
    return 1;
  }

  // RAMA 3
  if (estadoActual == 13 && mouseX > 440 && mouseX < 540 && mouseY > 370 && mouseY < 420) { // 13 a 16
    return 16;
  }
  if (estadoActual == 16 && mouseX > 280 && mouseX < 380 && mouseY > 370 && mouseY < 420) { // 16 a 17
    return 17;
  }
  if (estadoActual == 17 && mouseX > 280 && mouseX < 380 && mouseY > 320 && mouseY < 370) { // 17 a 1
    return 1;
  }
   return estadoActual;
}
