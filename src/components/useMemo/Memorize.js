import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(false);
    return (
        <div className="m-5">
            <h1>UseMemo <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary m-1" onClick={() => increment(1)}>+1</button>
            <button
                className="btn btn-outline-primary m-1"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
