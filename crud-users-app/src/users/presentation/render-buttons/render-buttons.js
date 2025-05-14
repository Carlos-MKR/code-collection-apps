import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';

export const renderButtons = ( element ) => {
    
    const nextButton = document.createElement( 'button' )
    nextButton.innerText = ' Next >'

    const previousButton = document.createElement( 'button' )
    previousButton.innerText = '< Previous '

    const currentPageLabel = document.createElement( 'span' )
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    const container = document.createElement('div');
    container.className = 'pagination-container';

    container.append(previousButton, currentPageLabel, nextButton);
    element.append(container);

    nextButton.addEventListener( 'click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    } );

    previousButton.addEventListener( 'click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    } );

}