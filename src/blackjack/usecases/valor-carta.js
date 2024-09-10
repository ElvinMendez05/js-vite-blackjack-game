/**
 * 
 * @param {Array<String>} carta  
 * @returns {number} devuelve un number 
 */

export const valorCarta = (carta) => {
      
    const valor = carta.substring(0,  carta.length - 1);
    return (isNaN(valor)) ? 
        (valor === 'A') ? 11 : 10
        : valor * 1; //para que tenga valores enteros    
}
