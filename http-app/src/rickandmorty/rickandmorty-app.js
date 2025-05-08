import { createCharacterCard, fetchData } from '../modules/index';


export const RickandmortyApp = async ( element ) => {

    document.querySelector('#app-title').innerHTML = 'Rick and Morty Characters';

    element.innerHTML = '<span style="color: black;">LOADING...</span>';

    fetchData()
        .then( data => createCharacterCard(data, element) )
        .catch( error => console.log(error) );
    
}