import React, { useState } from "react";

const Counter = () => {

    // useState é um hook
    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
        <p>{counter}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter