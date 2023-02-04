import React, { useEffect, useState } from 'react'
import clock from './assets/clock.png'
import './Timer.css'

const Timer = () => {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (setStart == true) {
            setTimeout(() => {
                setCount(count + 1)
            }, 1000)
        }
    })


    const handleClickStart = () => {
        setStart(!start)
    }

    return(
        <div className='container'>
            <div className='grid-timer'>
            <div className='center-items'>
                <h2>Click to start</h2>
            </div>

            <div className='center-items'>
            <div className='clock'>
            <img className='clock' src={clock}></img>
            </div>
            </div>

            <div className='column-time center-items'>
                <p>{count}</p>
                <button onClick={handleClickStart} className='start'>Start</button>
            </div>

            </div>
        </div>
    )
}

export default Timer