import React from 'react'

const TemplateExpressions = () => {
    const pessoa = {
        nome: 'Maria Eduarda',
        idade: 17,
        cidade: 'Florianópolis'
    }

    const perfil = 'https://avatars.githubusercontent.com/u/79697529?v=4'

  return (
    <div>
        <h1>Apresentação</h1>
        <p>Eu me chamo {pessoa.nome}, tenho {pessoa.idade} anos e moro em {pessoa.cidade}.</p>
        <img src={perfil}></img>
    </div>
  )
}

export default TemplateExpressions