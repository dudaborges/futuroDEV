class Livro{
    constructor(titulo, autor, valor){
        this.titulo = titulo
        this.autor = autor
        this.valor = valor
    }
}

const livro = new Livro("Depois dos Quinze", "Bruna Vieira", 100)

console.log(livro)

class Programador{
    constructor(nome, linguagem, status){
        this.nome = nome
        this.linguagem = linguagem
        this.status = status
    }
}

const programador = new Programador("Maria", "Html, Css, Javascript, Java, Sql", "Junior")

console.log(programador)

class Jogo{
    constructor(nome, dataLancamento, valor){
        this.nome = nome
        this.dataLancamento = dataLancamento
        this.valor = valor
    }
}

const jogo = new Jogo("The Sims 4", 2014, "Gratuito")
console.log(jogo)