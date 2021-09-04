import { useState } from 'react'

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState);

    const increment = function ( factor = 1 ) {
        setState( state + factor );
    }

    const decrement = function ( factor = 1 ) {
        setState( state - factor );
    }

    const reset = function () {
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}
