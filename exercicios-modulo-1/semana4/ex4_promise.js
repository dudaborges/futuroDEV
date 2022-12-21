const verificarIdade = new Promise( (resolve, reject) => {
    const idade = 18

    if(idade >= 18){
        resolve('Acesso liberado')
    }else{
        reject('Acesso rejeitado, menor de idade.')
    }
})

verificarIdade.then((entrada) => {
    console.log(entrada)
})