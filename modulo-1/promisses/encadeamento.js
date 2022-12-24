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
.then((dadoModificado) => {
    console.log(dadoModificado)
})
