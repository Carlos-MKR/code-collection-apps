

/**
 * Fetches a random character's data from the Rick and Morty API.
 *
 * Generates a random character ID between 1 and 826, then fetches
 * data for that character from the API. Returns the character data
 * as a JSON object.
 *
 * @returns {Promise<Object>} A promise that resolves to the character data.
 */

export const fetchData = async () => {

    const randomId = Math.floor(Math.random() * 826) + 1;

    const Endpoint = 'https://rickandmortyapi.com/api/character/' + randomId;
    
    const response = await fetch(Endpoint);

    const data = await response.json();
    
    return data;
}
