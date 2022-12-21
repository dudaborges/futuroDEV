class Livro{
    constructor(titulo, autor, valor){
        this.titulo = titulo
        this.autor = autor
        this.valor = valor
    }

    cadastrar(){
        return `${this.titulo, this.autor, this.valor}`
    }
}

const livro = new Livro("Depois dos Quinze", "Bruna Vieira", 100)

console.log(livro)
livro.cadastrar()