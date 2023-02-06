import React, { useEffect, useRef, useState } from 'react'
import '../Colors/Colors.css'

const Colors = () => {

    const box = useRef()

    const handleClickCyan = () => {
        // para acessar um ref sempre é preciso colocar .current
        box.current.style.backgroundColor = 'cyan'
    }

    const handleClickYellow = () => {
        box.current.style.backgroundColor = 'yellow'
    }

    const handleClickPurple = () => {
        box.current.style.backgroundColor = 'purple'
    }

    return(
        <div className='container'>
            <div  className='column'>

            <div className='column-1'>
                {/* ref seria como um id no javascript puro. Pega um elemento de referência */}
            <div className='box' ref={box}>
            
            </div>
            <div className='flexbox'>
            <button onClick={handleClickCyan}>Cyan</button>
            <button onClick={handleClickYellow}>Yellow</button>
            <button onClick={handleClickPurple}>Purple</button>
            </div>
            </div>
            
            <div className='column-2'>
                <h2>Change the color of the div</h2>
            </div>

            </div>

        </div>
    )
}

export default Colors