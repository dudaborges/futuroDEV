async function buscarDadosNoBanco(){
    try {
        return await new Promise((resolve, reject) => {
            // set time out = definir o tempo limite
            setTimeout(() => {
                const email = "duda@gmail.com"

                if (email === "julia@gmail.com") {
                    resolve('Conta cadastrada com sucesso!')
                } else {
                    reject('E-mail já cadastrado')
                }
            }), 3000
        })
    } catch (err) {
        console.log(err)
    }
 }
 

async function cadastrar(){
    
    console.log('*Usuário clicou no botão cadastrar*')

    await buscarDadosNoBanco()

}

cadastrar()