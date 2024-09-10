import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck
 */

// this function create a new deck
export const crearDeck = (tiposCartas, cartasEspeciales) => {
    
    let deck = [];

    if (!tiposCartas || tiposCartas.length === 0) 
        throw new Error('tiposCartas es obligatorio como un arreglo de string')
    if (!cartasEspeciales || cartasEspeciales.length === 0) 
        throw new Error('cartasEspeciales es obligatorio como un arreglo de string')

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas)
            deck.push(i + tipo);
    };

    for (let tipo of tiposCartas) {
    for (let special of cartasEspeciales) 
        deck.push(special + tipo);
    };
    return  _.shuffle(deck); //baraja o desordena el arreglo 
}

// export default crearDeck;
