import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li
            className="list-group-item"
        >
            <div className="d-flex align-items-center justify-content-between">
                <span
                    onClick={() => handleToggle(todo.id)}
                    className={todo.done ? "pointer text-decoration-line-through" : "pointer"}
                >
                    {index + 1}. {todo.desc}
                </span>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                >
                    borrar
                </button>
            </div>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}
