import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './TodoReducer';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import './TodoApp.css';

export const TodoApp = () => {

    const init = function () {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = function (todoId) {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = function (todoId) {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    }

    const handleAddNewTodo = function (newTodo) {
        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatch(action);
    }

    return (
        <div className="container">
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddNewTodo={handleAddNewTodo} />
                </div>

            </div>
        </div>
    )
}
