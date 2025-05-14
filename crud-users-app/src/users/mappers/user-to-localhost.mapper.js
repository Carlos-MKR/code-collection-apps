

/**
 * Maps a User model to a localhost user object.
 *
 * @param {User} user - The user model to map
 * @returns {Like<User>} - The mapped localhost user object
 */
export const userModelToLocalhost = ( user ) => {
    const { 
        avatar, 
        balance, 
        firstName, 
        gender, 
        id, 
        isActive, 
        lastName 
    } = user;
    
    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName
    }
}