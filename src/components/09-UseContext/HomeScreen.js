import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <div className="container">
            <h1>HomeScreen</h1>
            <hr />
        </div>
    )
}
