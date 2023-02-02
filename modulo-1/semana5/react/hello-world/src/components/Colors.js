import React, { useState } from "react";

const Colors = () => {

    const [color, setColor] = useState('Blue')

    const handleClickCyan = () => {
        setColor('Cyan')
    }

    const handleClickPink = () => {
        setColor('Pink')
    }

    return(
        <div>
        <p>My favorite color is {color}</p>
        <button onClick={handleClickCyan}>Change to Cyan</button>
        <button onClick={handleClickPink}>Change to Pink</button>
        </div>
    )
}

export default Colors