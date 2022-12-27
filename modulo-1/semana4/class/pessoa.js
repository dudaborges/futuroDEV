// constructor inicializa o objeto
// estrutura de programação orientada a objeto (POO)
class Pessoa{
    constructor(nome, sobrenome, idade){
        // o this inicializa
        // instanciar
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}

// new inicializa do construtor
const pessoa = new Pessoa("Maria", "Borges", 34)

console.log(pessoa)