import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store'; //estamos importando en una sola variable todos los métodos que se exportaron en todo.store.js:

import {renderTodos} from '../todos/use-cases/render-todos';


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro'
}

/**
 * Initializes the ToDo application and mounts it to the specified HTML element.
 *
 * @param {string} elementId - The ID of the HTML element where the app will be rendered.
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentfilter() );
        renderTodos(ElementIDs.TodoList, todos);
        displayPendingCount();
    }

    const displayPendingCount = () => {
        const pendingCount = todoStore.getTodos( Filters.Pending ).length;
        const pendingCountElement = document.querySelector( '#pending-count' );
        pendingCountElement.innerHTML = pendingCount;
    }

    (() => {
        const app = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    })();

    // Referencias HMTL
    const newTodoInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoList = document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIDs.ClearCompleted );
    const todoFilters = document.querySelectorAll( ElementIDs.TodoFilters );


    // listeners
    newTodoInput.addEventListener( 'keyup', ( event ) => {
        if(event.keyCode !== 13) return;
        if(!event.target.value) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    })

    todoList.addEventListener( 'click', ( event ) => {
        const element = event.target.closest( '[data-id]' );
        if(!element) return;

        const todoId = element.getAttribute( 'data-id' );
        todoStore.toggleTodo( todoId );
        displayTodos();
    })

    todoList.addEventListener( 'click', ( event ) => {
        if(event.target.classList.contains( 'destroy' )) {
            const todoId = event.target.closest( '[data-id]' ).getAttribute( 'data-id' );
            todoStore.deleteTodo( todoId );
            displayTodos();
        }
    })

    clearCompletedButton.addEventListener( 'click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    todoFilters.forEach( element => {
        element.addEventListener( 'click', ( event ) => {
            todoFilters.forEach( el => el.classList.remove('selected') );
            event.target.classList.add('selected');
            
            switch (event.target.text) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
            }
            displayTodos();
        })
    })

}