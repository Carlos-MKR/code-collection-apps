
import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

export const saveUser = async( newUser ) => {
    
    const user = new User( newUser );


    if( !user.firstName || !user.lastName ) return;

    const userToSave = userModelToLocalhost( user );
    let userUpdated;

    if( user.id ) {
        userUpdated = await updateUser( userToSave );
    }else{
        userUpdated = await createUser( userToSave );
    }
    
    return localhostUserToModel( userUpdated );

}

const createUser = async( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const response = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user )
    });
    
    const newUser = await response.json();
    
    return newUser;
}

const updateUser = async( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const response = await fetch( url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user )
    });
    
    const updatedUser = await response.json();

    return updatedUser;
}