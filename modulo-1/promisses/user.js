const mypromise = new Promise( (resolve, reject) => {
    const user = "Julia"

    if(user === "Maria"){
        resolve('Usuário encontrado')
    }else{
        reject('[ERRO] Usuário não encontrado')
    }
})

// then é então
// no "dado" pode ser qualquer nome
mypromise.then((dado) => {
    console.log(dado)
}) 