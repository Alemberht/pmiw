let estado=1;
let imagenes = [];
let texto = [];
let decisión = [];

function preload() {
   for (let i = 1; i < 20; i++) {
    imagenes[i] = loadImage("data/Designer_"+nf(i,2)+".png");
  }

  }

function setup() {
createCanvas(640,480);
texto[1]= ("Llega a mordor con frodo y sam. quemando el anillo único");
texto[2]= ("Al salir de la comarca, te encuentras con unos hobbits llamados merry y pippin");
texto[3]= ("Caen a un barranco y se encuentran a un nazgúl. Qué hacen? ''");
texto[4]= ("Pasan desapercibidos, logrando huír hacia un pueblo llamado bree, pidiendo alojamiento");
texto[7]= ("conocen a un montaraz que se hace llamar trancos, ahora los acompaña en su viaje");
texto[22]= ("llegan a rivendell y se enteran que tienen que llevar el anillo a mordor al monte del destino, destruyéndolo en el acto");
texto[8]= ("Salen de Rivendel, acompañados por 4 compañeros más, gandalf, Boromir, Legolas y Gimli");
texto[9]= ("Llegan a Minas moria, allí gandalf muere y logran pasar al otro lado, llegando al paso de gondor");
texto[10]= ("Luego Boromir muere intentado quitartle el anillo a frodo");
texto[11]= ("Sam te decide acompañar en tu viaje solo y emprender el viaje a mordor junto a ti");
texto[12]= (" Conocen a una criatura llamada Gollum y los acompaña en el viaje");
texto[21]= ("Logran llegar a mordor");
texto[13]= ("Al llegar al monte del destino el anillo te tienta, ofreciéndote juventud y poder");
texto[18]= ("Corrupto, te pones el anillo. viniendo gollum hacia ti. Arráncandote el dedo del anillo, en eso, los dos se caen con gollum teniendo el anillo hacia la boca del volcána.");
texto[19]= ("Sam te salva de morir");
texto[20]= ("La tierra media se ha salvado");

//ruta secndaria 1

texto[5]= ("Los nazgúl los persiguen y les dan caza");
texto[6]= ("El anillo único ahora es de Sauron, la tierra media ahora no tiene futuro más que la eterna oscuridad");

//ruta secndaria 2

texto[14]= ("Con el tiempo , alguien más intenta robarte el anillo en medio de la noche");
texto[15]= ("Te lo roba, y desaparece. haciendo que el anillo se pierda por milenios una vez más");

//ruta secndaria 3

texto[16]= ("Al intentarlo arrojar al volcán por voluntad propia, gollum te mata a traición, robándo el anillo en el acto");
texto[17]= ("Ahora el anillo lo tiene gollum y  es cuestión de tiempo para que los Nazgul lo recuperen");

//DECISIONES
decisión[1] = ("Esconderse");
decisión[2] = ("Huir");

decisión[3] = ("Seguir solo");
decisión[4] = ("Quedarse con la compañía");;

decisión[5] = ("El anillo es mío");
decisión[6] = ("Arrojar el anillo al volcán");;

}


function draw() {
 background(200);
  pantallas();
}
