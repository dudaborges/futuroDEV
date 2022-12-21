class Jogo{
    constructor(nome, dataLancamento, valor){
        this.nome = nome
        this.dataLancamento = dataLancamento
        this.valor = valor
    }

    static comprar(){
        console.log("Compra realizada com sucesso!")
    }
}

Jogo.comprar()