// Pantalla base para la herencia
class Pantalla {
  constructor(juego) {
    this.juego = juego;
  }

  iniciar() {}
  actualizar() {}
  dibujar() {}
}

// Pantalla de inicio
class PantallaInicio extends Pantalla {
  constructor(juego) {
    super(juego);
    this.botonInicio = new Boton("Comenzar Juego", width / 2 - 70, height / 2 + 50, 140, 50, () => {
      this.juego.cambiarPantalla("juego");
    });
        this.introimg= loadImage("data/comarca.jpg");
       
       
       
  }
    
  actualizar() {
    // No se necesita lógica adicional en la pantalla de inicio
  }

  dibujar() {
    background(135, 206, 250); // Fondo del cielo
    if (this.introimg) { 
    image(this.introimg, 0, 0, width, height); // Dibuja la imagen de fondo
  }
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("sortea los orcos para llegar al final ", width / 2, height / 4);
     text(" usa la flecha arriba del teclado para moverte", width / 2, height / 3);
    this.botonInicio.mostrar();
  }
}

// Pantalla del juego
class PantallaJuego extends Pantalla {
  constructor(juego) {
    super(juego);
    this.juegoActivo = new JuegoActivo(this.juego);
  }

  iniciar() {
    this.juegoActivo.iniciar(); // Iniciar el juego activo
  }

  actualizar() {
    this.juegoActivo.actualizar(); // Actualizar el juego
  }

  dibujar() {
    this.juegoActivo.dibujar(); // Dibujar el juego
  }
}

// Pantalla de victoria
class PantallaVictoria extends Pantalla {
  constructor(juego) {
    super(juego);
    this.botonVictoria = new Boton("Ir a Créditos", width / 2 - 70, height / 2 + 50, 140, 50, () => {
      this.juego.cambiarPantalla("creditos");
   
    });
        this.victoimg= loadImage("data/ganar.png");
  }

  dibujar() {
    background(0, 255, 0); // Fondo verde para victoria
    if (this.victoimg) { 
    image(this.victoimg, 0, 0, width, height); // Dibuja la imagen de fondo
  }
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Ganaste, lograste llegar al final!", width / 2, height / 4);
    this.botonVictoria.mostrar();
  }
}

// Pantalla de derrota
class PantallaDerrota extends Pantalla {
  constructor(juego) {
    super(juego);
    this.botonDerrota = new Boton("Ir a Créditos", width / 2 - 70, height / 2 + 50, 140, 50, () => {
      this.juego.cambiarPantalla("creditos");
   
    });
        this.derroimg= loadImage("data/perder.png");
  }

  dibujar() {
    background(255, 0, 0); // Fondo rojo para derrota
    if (this.derroimg) { 
    image(this.derroimg, 0, 0, width, height); // Dibuja la imagen de fondo
  }
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Perdiste, los orcos ahora tienen el anillo!", width / 2, height / 4);
    this.botonDerrota.mostrar();
  }
}

// Pantalla de créditos
class PantallaCreditos extends Pantalla {
  constructor(juego) {
  
    super(juego);
    this.botonCreditos = new Boton("Reiniciar Juego", width / 2 - 70, height / 2 + 50, 140, 50, () => {
      this.juego.cambiarPantalla("inicio");
      this.juego.pantallas.juego.juegoActivo.reiniciar(); // Reiniciar el juego activo
    });
        this.reiimg= loadImage("data/gondor.jpg");
  }

  dibujar() {
    background(200); // Fondo gris para créditos
    if (this.reiimg) { 
    image(this.reiimg, 0, 0, width, height); // Dibuja la imagen de fondo
  }
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Créditos: Hecho por Mercado Julián", width / 2, height / 4);
    text("Créditos: Hecho por Flores Alemberht", width / 2, height / 3);
    this.botonCreditos.mostrar();
  }
}
