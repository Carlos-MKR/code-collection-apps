import { User } from "../models/user";


/**
 * Maps a localhost user object to a User model.
 *
 * @param {Like<User>} localhostUser - The user object from localhost
 * @returns {User} The mapped User model
 */
export const localhostUserToModel = ( localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = localhostUser;


    return new User( {
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name
    } );
}