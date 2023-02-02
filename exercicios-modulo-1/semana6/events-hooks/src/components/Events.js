import React from 'react'

const Events = () => {

    const handleClick = () => {
        alert('você clicou no botão!')
    }

    return(
        <button onClick={handleClick}>Clique aqui!</button>
    )
}

export default Events