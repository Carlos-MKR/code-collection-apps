

/**
 * Deletes a user by id.
 *
 * @param {string|number} id - The identifier for the user to delete.
 *
 * @returns {Promise<boolean>} - A promise that resolves with true if the user was deleted.
 */
export const deleteUserById = async( id ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const response = await fetch( url, {
        method: 'DELETE',
    });
    
    const deleteResult = await response.json();

    return true;
}