import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, idx) => {
                    return (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            index={idx}
                            handleToggle={handleToggle}
                            handleDelete={handleDelete}
                        />
                    )
                })
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}
