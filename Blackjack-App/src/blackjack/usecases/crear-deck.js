import _ from 'underscore';

/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas ejemplo ['C','D','H','S'];
 * @param {Array<String>} tiposDeEspeciales ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} regresa un un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposDeEspeciales) => {

    if( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('Tipos de cartas es obligatorio como un array de strings');
    if( !tiposDeEspeciales || tiposDeEspeciales.length === 0 ) throw new Error('Tipos de cartas especiales es obligatorio como un array de strings');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposDeEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}