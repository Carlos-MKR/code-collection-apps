import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
    console.log('initStore 💣');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    
    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filrer = Filters.All) => {
    switch (filrer) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter((todo) => todo.done);
        case Filters.Pending:
            return state.todos.filter((todo) => !todo.done);
        default:
            throw new Error(`Unknown filter: ${filrer}`);
    }
}

/**
 * Adds a new todo item to the state with the provided description.
 *
 * @param {string} description - The description of the todo item to be added.
 */

const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {
    const todo = state.todos.find((todo) => todo.id === todoId);
    todo.done = !todo.done; 

    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);

    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter((todo) => !todo.done);

    saveStateToLocalStorage();
}

/**
 * Sets the current filter for the todos.
 *
 * @param {filters} newFilter - The new filter to be applied (e.g., 'all', 'completed', 'pending').
 * Defaults to 'all' if not provided.
 */

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveStateToLocalStorage();
}

const getCurrentfilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentfilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}