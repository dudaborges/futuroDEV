const OnKeyDown = () => {

    const handleOnKeyDown = e => {
        alert((e.keyCode === 48) ? 'You typed 0!' : 'This is not 0!')
    }
    /* onkeydown pega a última tecla digitada no teclado e não valor inteiro */
    return(
        <form>
        <label>Número:
            <input type="text" onKeyDown={handleOnKeyDown} />
        </label>
        <button type="submit">Send</button>
        </form>
    )
}

export default OnKeyDown