

/**
 * Creates the HTML element for a given Todo.
 *
 * @param {Todo} todo - The todo for which the HTML should be created.
 *
 * @returns {HTMLElement} The HTML element representing the todo.
 */
export const createTodoHTML = ( todo) => {
    if(!todo) throw new Error('Todo is required');
    

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
            <label>${todo.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);

    if(todo.done){
        liElement.classList.add('completed');
    }

    return liElement;
}