import { useState } from "react"

const RandomAdvice = () =>{
    const [advice, setAdvice] = useState("")

    const getAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        console.log(data)
        setAdvice(data.slip.advice)
    }

    return(
        <div>
            <p>{advice}</p>
            <button onClick={getAdvice}>Generate Advice</button>
        </div>

    )
}

export default RandomAdvice