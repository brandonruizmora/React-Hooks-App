import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const pTag = useRef();
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div className="m-5">
            <h1>LayoutEffect</h1>
            <hr />
                <div className="d-flex">
                    <p ref={pTag}>{quote}</p>
                </div>
            <pre>
                { JSON.stringify( boxSize, null, 3)}
            </pre>
            <button className="btn btn-success mx-1" onClick={() => increment(1)}>
                Siguiente
            </button>
        </div>
    )
}
