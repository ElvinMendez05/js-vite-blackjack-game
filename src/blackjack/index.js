import _ from 'underscore';
import {crearDeck, pedirCarta, crearCarta, valorCarta, determinarGanador} from './usecases';

/** 
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades 
 */

//Patron modulo 
const modulo = (() => { //protege el codigo

  'use strict'

  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A', 'J', 'Q', 'K'];

  // let puntosJugador = 0,
  //     puntosComputadora = 0; 

  let puntosJugadores = [];

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        mostrarPuntos = document.querySelectorAll('small');

  const divCartasJugadores = document.querySelectorAll('.divCartas');
        
  //inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
      
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      } 
      mostrarPuntos.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;  
  };

  //importacion crearDeck 
  deck = crearDeck(tipos, especiales);

  const acumularPuntos = (carta, turno) => {    

       puntosJugadores[turno] =  puntosJugadores[turno] + valorCarta(carta);
       mostrarPuntos[turno].innerText = puntosJugadores[turno];  
      
       return  puntosJugadores[turno];
 };

   const turnoComputadora = (puntosMinimos, deck = []) => {
    
     let puntosComputadora = 0;
  
     do {
         const carta = pedirCarta(deck);
         puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
         crearCarta(carta, puntosJugadores.length - 1);
     }
     while (puntosComputadora < puntosMinimos && (puntosMinimos <=21));
  
     determinarGanador(puntosJugadores);
   };


  //Eventos
  btnPedir.addEventListener('click', () => {
      
    const carta = pedirCarta(deck);
      
      const puntosJugador = acumularPuntos(carta, 0);

      crearCarta(carta, 0);

      if (puntosJugador > 21) {
          console.warn('Has pedido');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, deck);
      } 
      else if (puntosJugador === 21) {
          console.warn('21, Genial');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, deck);
      }
  });

  //evento detener 
  btnDetener.addEventListener('click', ()=> {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], deck);
  });

   btnNuevo.addEventListener('click', () => {
       inicializarJuego();
    });

  return {
     nuevoJuego: inicializarJuego
  };

})();

