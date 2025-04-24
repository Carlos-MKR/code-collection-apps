
/**
 * Crea el HTML de una carta de blackjack
 * @param {String} carta cadena que representa la carta
 * @returns {HTMLImageElement} imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {
    if( !carta ) throw new Error('La carta es obligatoria');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}