import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { todoReducer } from './TodoReducer';

export const TodoApp = () => {

    const init = function () {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

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

    const handleSubmit = function (e) {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();

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
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Hacer..."
                            onChange={handleInputChange}
                            value={description}
                            autoComplete="off"
                        />
                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-2"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
