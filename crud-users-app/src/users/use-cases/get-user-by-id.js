

import { localhostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * Loads a page of users from the server.
 * 
 * @param {String|Number} id - The identifier for the user to load.
 * @returns {Promise<User[]>} - The loaded users.
 */

export const getUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const response = await fetch( url );
    const data = await response.json();
    
    const user = localhostUserToModel( data );

    return user;
    
}