const mypromise = new Promise( (resolve, reject) => {
    const user = "Julia"

    if(user === "Maria"){
        resolve('Usuário encontrado')
    }else{
        reject('Usuário não encontrado')
    }
})

mypromise.then((dado) => {
    console.log(dado)
}) 
// o catch serve para tratar o erro, aparecer o erro de forma mais organizada para o usuário
.catch((error) => {
    console.log(`[ERROR] ${error}` )
})