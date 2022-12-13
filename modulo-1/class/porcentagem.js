class Salario{
    constructor(nome, salario, acrescimo){
        this.nome = nome
        this.salario = salario
        this.acrescimo = acrescimo
    }

    adicionarAcrescimo(){
        
        return console.log(`O funcionário ${nome}, com o salário ${this.salario}, recebeu um acréscimo de ${this.acrescimo}`)
    }
}