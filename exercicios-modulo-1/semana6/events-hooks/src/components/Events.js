import React from 'react'

const Events = (props) => {

    const handleClick = () => {
        alert(`Você clicou no botão! :) O argumento é ${props.teste}`)
    }

    return(
        <button onClick={handleClick}>Clique aqui!</button>
    )
}

export default Events