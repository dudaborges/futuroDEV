class Aluno{
    constructor(nome, av1, av2, av3){
        this.nome = nome
        this.av1 = av1
        this.av2 = av2
        this.av3 = av3
    }

    calcularMedia(){
        return console.log((this.av1 + this.av2 + this.av3) / 3)
    }
}

const aluno = new Aluno("Laura", 7, 5, 9)

console.log(aluno)
aluno.calcularMedia()