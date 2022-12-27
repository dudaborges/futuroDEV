
function buscarDadosNoBanco(){
    return new Promise((resolve, reject) => {
        // set time out = definir o tempo limite
        setTimeout(() => {
            const email = "duda@gmail.com"

            if(email === "julia@gmail.com"){
                resolve('Conta cadastrada com sucesso!')
            }else{
                reject('E-mail já cadastrado')
            }
        }), 3000
        // 3 segundos estimados pelo tempo que levaria para buscar os dados no banco de dados e retornar uma mensagem pro cliente
        })

 }

async function cadastrar(){
    console.log('*Usuário clicou no botão cadastrar*')

    await buscarDadosNoBanco()

}

cadastrar()

