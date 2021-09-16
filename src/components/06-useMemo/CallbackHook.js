import React, { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        () => {
            setCounter( arg => arg + 1);
        },
        [setCounter],
    );

    // useEffect(() => {
    //     //???
    //     return () => {
    //         //???
    //     }
    // }, [increment]);

    return (
        <div className="m-5">
            <h1>UseCallback: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment } />
        </div>
    )
}
