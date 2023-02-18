import React, { useState } from "react";

const Ex5e6ShoppingList = (() => {


    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')

    const product = [{
        item: item,
        quantity: quantity
    }]

    const handleSubmit = () => {
        localStorage.setItem('product', JSON.stringify(product))
    }

    console.log(product)
    return(
    <form>
        <label>Item: </label>
        <input type="text" onChange={(event) => setItem(event.target.value)} value={item} />
        <br/>

        <label>Quantidade: </label>
        <input type="number" onChange={(event) => setQuantity(event.target.value)} />
        <br/>

        <button onClick={handleSubmit} type="submit">Enviar</button>
    </form>
    )
})

export default Ex5e6ShoppingList