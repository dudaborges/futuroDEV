const OnSubmit = () => {

    // para evitar que recarregue a página (e)
    const handleSubmit = e => {
        e.preventDefault()
        alert('You submitted the form!')
    } 

    return (
        // por padrão, o quando é clicado no botão submeter dentro do form é recarregado a página para tentar enviar os dados para o backend. Chamando o submit, o padrão é mudado.
        <form onSubmit={handleSubmit}>
            <label>
                nome:
                <input type="text" name="name" />
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default OnSubmit