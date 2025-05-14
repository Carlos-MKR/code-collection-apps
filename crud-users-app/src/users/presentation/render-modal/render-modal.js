import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form;
let loadedUser = {};

/**
 * Displays the modal by removing the 'hidden-modal' class.
 *
 * @param {string|Number} id - The identifier for the modal to show.
 */

export const showModal = async(id) => {
    modal?.classList.remove( 'hidden-modal' );
    loadedUser = {};

    if( !id ) return;

    const user = await getUserById( id );

    setformValues( user );
}

export const hideModal = () => {
    modal?.classList.add( 'hidden-modal' );

    form?.reset();
}

const setformValues = ( user ) => {
    form.firstName.value = user.firstName;
    form.lastName.value = user.lastName;
    form.balance.value = user.balance;
    form.isActive.checked = user.isActive;
    loadedUser = user;
}

export const renderModal = ( element, callback ) => {
    if( modal ) return;

    modal = document.createElement( 'div' );
    modal.innerHTML = modalHTML;
    modal.classList.add( 'modal-container', 'hidden-modal' );
    form = modal.querySelector( 'form' );

    element.append( modal );

    form.addEventListener( 'submit', async( event ) => {
        event.preventDefault();

        const formData = new FormData( form );

        if( !formData.get('isActive') ) formData.set( 'isActive', false );

        const user = { ...loadedUser };

        for (const [key, value] of formData) {
            if( key === 'balance' ){
                user[key] = Number(value);
                continue;
            }

            if( key === 'isActive' ){
                user[key] = (value === 'on') ? true : false;
                continue;
            }

            user[key] = value;
        }

        await callback( user );

        hideModal();
    } );

    modal.addEventListener( 'click', (event) => {
        if( event.target.classList.contains( 'modal-container' ) ) hideModal();
    } );
}