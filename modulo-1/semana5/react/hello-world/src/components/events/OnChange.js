// evento onchange: quando altera algo em um input por exemplo
const OnChange = () => {

    // normalmente, funções que tratam eventos são nomeadas de "handle"
    const handleChange = () => {
        alert('You changed the name field!')
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Send</button>
            </label>
        </form>
    )
}

export default OnChange