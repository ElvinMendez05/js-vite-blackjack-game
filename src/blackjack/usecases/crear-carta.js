
const divCartasJugadores = document.querySelectorAll('.divCartas');

export const crearCarta = (carta, turno) => {

    //mostrar las cartas pedidas
     const crearImg = document.createElement('img');
     crearImg.src = `assets/cartas/${carta}.png`;
     crearImg.classList.add('carta'); //estilo de a clase 
     divCartasJugadores[turno].append(crearImg);   
 };
