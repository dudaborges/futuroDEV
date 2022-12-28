function getUser(){
    return fetch('https://api.github.com/users/manishmshiva')
    .then((data) => data.json())
    .then(json => console.log(json))
    .catch((err) => console.log('ERRO' + err))
}

async function exibirUserName(){
    const user = await getUser()

    console.log(`O nome do usuário é: ${user}`)
}

exibirUserName()