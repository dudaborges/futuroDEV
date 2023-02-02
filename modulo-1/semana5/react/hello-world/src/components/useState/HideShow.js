import React, { useState } from "react";

const HideShow = () => {

    const [showText, setText] = useState(true)

    const handleClickTrue = () => {
        setText(true)
    }

    const handleClickFalse = () => {
        setText(false)
    }

    return(
        <div>
        {showText && <p>I like to drink coffe every day.</p>}
    
        <button onClick={handleClickTrue}>Show</button>
        <button onClick={handleClickFalse}>Hide</button>
        </div>
    )
}

export default HideShow