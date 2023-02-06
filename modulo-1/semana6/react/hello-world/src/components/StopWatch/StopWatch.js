import React, { useEffect, useState } from 'react'
import clock from '../assets/clock.png'
import './StopWatch.css'

const StopWatch = () => {

    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10) 
            }, 10)
        } else{
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
    }

    const handlePauseResume = () => {
        setIsPaused(!isPaused)
    }

    const handleReset = () => {
        setIsActive(false)
        setTime(0)
    }

    const StartButton = (
        <button className='start' onClick={handleStart}>Start</button>
    )

    const ActiveButtons = (
        <div>
        <button className='btn' onClick={handleReset}>Reset</button>
        <button className='btn' onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>
        </div>
    )



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

            <div className='stop-watch'>
                <div className='time'>
                    <span>
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    </span>
                    <span>
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                    </span>
                    <span>
                        {("0" + ((time / 10) % 100)).slice(-2)}
                    </span>
                </div>
                <div>
                {isActive ? ActiveButtons : StartButton}</div>
            </div>

            </div>
        </div>
    )
}

export default StopWatch