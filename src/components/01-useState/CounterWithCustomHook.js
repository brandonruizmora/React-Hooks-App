import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter(0);

    return (
        <div className="container mt-5">
            <h1>Counter: {counter}</h1>
            <hr />
            <button 
            className="btn btn-danger mx-1"
            onClick={ () => decrement(1) }
            >-1</button>
            <button 
            className="btn btn-success mx-1"
            onClick= { reset }
            >reset</button>
            <button 
            className="btn btn-primary mx-1"
            onClick={ () => increment(2) }
            >+1</button>
        </div>
    );

}
