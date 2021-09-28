import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';


export const MainApp = () => {
    const user = {
        id: 1234,
        email: 'brandon_ruizmor@outook.es',
        name: 'Brandon Ruiz Morales'
    }
    return (
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    )
}
