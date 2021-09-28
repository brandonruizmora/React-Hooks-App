import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <div className="container">
            <h1>LoginScreen</h1>
            <hr />
            <button 
            className="btn btn-primary"
            onClick={() => {
                setUser({
                    id: 123,
                    name: 'Brandon',
                    email: 'brandon_ruizmor@outlook.es'
                });
            }}
            >
                Login
                </button>
        </div>
    )
}
