import { localhostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * Loads a page of users from the server.
 * 
 * @param {number} [page=1] - The page number to load.
 * @returns {Promise<User[]>} - The loaded users.
 */

export const loadUsersByPage = async( page = 1 ) => {

    if( page < 1 ) page = 1;
    
    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const response = await fetch( url );
    const data = await response.json();
    
    if ( page > data.last ) return [];
    
    const users = data.data.map( user => localhostUserToModel( user ) );

    return users;
    
}