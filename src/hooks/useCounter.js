import { useState } from 'react';

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = function ( factor = 1 ) {
        setCounter( counter + factor );
    }

    const decrement = function ( factor = 1 ) {
        setCounter( counter - factor );
    }

    const reset = function () {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
