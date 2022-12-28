// executando uma chamada de uma api externa
// get significa buscar/pegar
function getUser(id){
    // fetch é um recurso de requição
    // esse fetch retorna uma promise
    return fetch(`https://reqres.in/api/users?id=${id}`) 
    // o then está tratando o dado para a estrutura de JSON (aquela estrutura com os dados dentro de chaves, e organizados)
    // then recebe os dados do fetch
    .then((data) => data.json())
    .catch((err) => console.log('[ERROR]'+ err)) 
}

async function username(id){
    try {
        const user = await getUser(id)
        console.log(`o nome de usuario é:${user.data.first_name}`)
    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

username()