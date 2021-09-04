import React, { useEffect, useState } from 'react';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('useEffect Initial load');
    }, []);

    useEffect(() => {
        console.log('useEffect listening for formState changes');
    }, [formState]);

    const handleInputChange = function ({ target }) {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <div className="container mt-5">
            <h1>useEffect</h1>
            <hr />
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="tu nombre" autoComplete="off" name="name" value={ name } onChange={ handleInputChange } />
            </div>
            <div class="mb-3">
                <input type="email" className="form-control" placeholder="tucorreo@gmail.com"  autoComplete="off" name="email" value={ email } onChange={ handleInputChange } />
            </div>
        </div>
    );
}
