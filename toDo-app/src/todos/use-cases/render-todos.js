import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * Renders the given todos inside the HTML element with the given id.
 *
 * @param {string} elementId - The id of the HTML element where the todos will be rendered.
 * @param {Todo[]} [todos=[]] - The todos to render. If none are given, an empty list is assumed.
 */
export const renderTodos = (elementId, todos = [] ) => {

    if(!element) element = document.querySelector( elementId );
   
    if(!element) throw new Error(`No element found with id ${elementId}`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });
}