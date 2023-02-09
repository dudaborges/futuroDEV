import react, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState()

    const handleName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    console.log("name: ", name)

    return(
        <div>
            <form>
                <h1>Cadastra-se</h1>
                <label>
                    <span>Nome: </span>
                    <input name='nome' type="text" value={name} onChange={handleName} />
                </label>
                <label>
                    <span>E-mail: </span>
                    <input name='email' type="email" />
                </label>
            </form>
        </div>
    )
}

export default Forms