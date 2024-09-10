/**
 * 
 * @param {Array} puntosJugadores estos son los puntos de los jugadores  
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        (puntosComputadora === puntosMinimos) ? 
        alert('Nadie gana,!empate') : (puntosMinimos > 21) ? 
        alert('Computadora gana') : (puntosComputadora > 21) ?
        alert('Jugador gana') : alert('Computadora gana');
    }, 10);
};