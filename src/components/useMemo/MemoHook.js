import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/ProcesoPesado';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(false);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div className="m-5">
            <h1>UseMemo</h1>
            <h3>counter: { counter }</h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
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