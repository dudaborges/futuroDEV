const myPromise = new Promise((resolve, reject) => {
    const statusProduto = false

    if(statusProduto == true){
        resolve('Abre a tela do produto')
    }else{
        reject('[ERRO] Produto não encontrado')
    }
})

myPromise.then((dado) => {
    return dado.toUpperCase()
})
// retorna uma nova promise
.then((dadoModificado) => {
    console.log(dadoModificado)
})
