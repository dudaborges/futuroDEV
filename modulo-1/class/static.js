class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    static criarCadastro(){
        console.log("Usuário cadastrado com sucesso!")
    }
}

Pessoa.criarCadastro()

