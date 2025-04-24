import { crearCartaHTML, pedirNuevaCarta, valorCarta } from './';


/**
 * Turno de la computadora
 * @param {number} puntosMinimos puntaje minimo para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar el puntaje
 * @param {HTMLElement} divCartasComputadora div para mostrar las cartas
 * @param {Array<String>} deck deck de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son obligatorios');
    if( !puntosHTML ) throw new Error('Elementos HTML son obligatorios');

    let puntosComputadora = 0;

    do {
        const carta = pedirNuevaCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
