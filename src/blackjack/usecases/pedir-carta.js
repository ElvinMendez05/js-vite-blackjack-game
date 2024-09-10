
/**
 * Esta funcion me permite tomar una carta 
 * @param {Array<string>} deck Esto son las cartas que contiene el arrego 
 * @returns {String} devuelve una carta
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        alert ('Ya no no hay mas carta, recarga la pagina'); 
        throw 'Ya no no hay mas carta'; //trow muestra un mensaje de error en la consola
    }  
    return deck.pop(); 
}
