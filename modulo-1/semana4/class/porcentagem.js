class Salario{
    constructor(nome, salario, acrescimo){
        this.nome = nome
        this.salario = salario
        this.acrescimo = acrescimo
    }

    adicionarAcrescimo(){
        let total = (this.salario * this.acrescimo) + this.salario
        return console.log(`O funcionário ${this.nome}, com o salário de ${this.salario}, recebeu um acréscimo de ${this.acrescimo} e ficou no total de ${total}`)
    }
}

const salario = new Salario("João", 5000, 0.2)

console.log(salario)
salario.adicionarAcrescimo()
