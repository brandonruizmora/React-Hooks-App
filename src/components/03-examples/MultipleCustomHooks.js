import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    console.log(loading)

    return (
        <div className="m-5">
            <h1>BreakingBad Quotes</h1>
            <hr />
            {loading ?
                (
                    <div className="alert alert-primary" role="alert">
                        Loading...
                    </div>
                )
                :
                (
                    <figure className="text-end">
                        <blockquote className="blockquote">
                            <p>{ quote }</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            { author }
                        </figcaption>
                    </figure>
                )
            }
            <button className="btn btn-primary mx-1" onClick={ () => decrement(1) }>
                Anterior
            </button>
            <button className="btn btn-success mx-1" onClick={ () => increment(1) }>
                Siguiente
            </button>
        </div>
    )
}
