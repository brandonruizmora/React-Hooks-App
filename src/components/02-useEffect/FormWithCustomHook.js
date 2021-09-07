import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = function (e) {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <div className="container mt-5">
            <h1>FormWithCustomHook</h1>
            <hr />
            <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="tu nombre" autoComplete="off" name="name" value={ name } onChange={ handleInputChange } />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="tucorreo@gmail.com" autoComplete="off" name="email" value={ email } onChange={ handleInputChange } />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="*****" autoComplete="off" name="password" value={ password } onChange={ handleInputChange } />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
}
