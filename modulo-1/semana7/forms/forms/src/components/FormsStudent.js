import React, { useState } from "react";
import './FormsStudent.css'

const FormsStudent = ({user}) => {

    const [showAluno, setAluno] = useState(false)
    // autopreenchimento
    const [escola, setEscola] = useState(user ? user.escola : "")
    const [nome, setNome] = useState()
    const [media, setMedia] = useState()
    const [idade, setIdade] = useState()

    const handleEscola = (event) => {
        setEscola(event.target.value)
    }

    const handleNome = (event) => {
        // console.log('mudou o nome')
        setNome(event.target.value)
    }
    console.log(`Nome: ${nome}`)

    const handleMedia = (event) => {
        setMedia(event.target.value)
    }
    console.log(`Média: ${media}`)

    const handleSubmit = (e) => {
        // cancela o recarregamento da página
        e.preventDefault()
        console.log(`Nome: ${nome}, Média ${media}, Idade ${idade}`)
    }

    const handleCadastrar = () => {
        alert('Usuário cadastrado!')
        setAluno(true)

    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Cadastre o Aluno</h1>
                <label>
                    <span>Escola: </span>
                    <input type="text" onChange={handleEscola} value={escola} />
                </label>
                <label>
                    <span>Nome do Aluno: </span>
                    <input type="text" onChange={handleNome} value={nome} />
                </label>
                <label>
                    <span>Média: </span>
                    <input type="number" onChange={handleMedia} value={media} />
                </label>
                <label>
                    <span>Idade: </span>
                    <input onChange={(event) => setIdade(event.target.value)} type="number" value={idade} />
                </label>
                <button type="submit" onClick={handleCadastrar}>Cadastrar</button>

                {showAluno && <p>Nome: {nome}, Média:  {media}, Idade: {idade} anos.</p>}

            </form>
        </div>
    )
}

export default FormsStudent