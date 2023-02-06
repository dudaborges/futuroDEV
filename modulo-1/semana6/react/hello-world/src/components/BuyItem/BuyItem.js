import React, { useRef, useState } from "react";
import "./BuyItem.css"
import topCaqui from "../assets/top-caqui.png"
import topPink from "../assets/top-pink.PNG"
import topVerde from "../assets/top-verde.png"

const BuyItem = () => {

    const [counter, setCounter] = useState(0)
    const top = useRef()
    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleGreen = () => {
        top.current.style.backgroundImage = `url(${topVerde})`
    }

    const handlePink = () => {
        top.current.style.backgroundImage = `url(${topPink})`

    }

    const handleKhaki = () => {
        top.current.style.backgroundImage = `url(${topCaqui})`

    }

    return(
        <div className="container">
            <div className="column-buy-item">
                <div ref={top} className="img-top" style={{ backgroundImage: "url(/image.png)" }}>

                </div>

                <div className="select">

                    <div className="select-quantity">
                        <p>{counter}</p>
                        <div className="btn-quantity">
                            <button onClick={handleDecrement}>-</button>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>

                    <div className="select-colors">
                        <div onClick={handleGreen} className="colors green"></div>
                        <div onClick={handlePink} className="colors pink"></div>
                        <div onClick={handleKhaki} className="colors khaki"></div>
                    </div>

                </div>

                <div className="title-add-item">
                <h2>Select the item</h2>
                </div>
            </div>
        </div>
    )
}

export default BuyItem