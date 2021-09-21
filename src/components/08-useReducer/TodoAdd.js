import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddNewTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

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

        handleAddNewTodo(newTodo);

        reset();
    }

    return (
        <>
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
        </>
    )
}
