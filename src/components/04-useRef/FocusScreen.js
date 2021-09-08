import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = function () {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div className="m-5">
            <h1>Focus Screen</h1>
            <hr />
            <input ref={ inputRef} className="form-control" />
            <button 
                className="btn btn-outline-primary mt-3" 
                onClick={ handleClick }
            >Focus</button>
        </div>
    )
}
