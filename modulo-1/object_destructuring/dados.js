//objeto é um tipo de dado, com uma chave e um valor

//desestruturando objetos
const pessoa = {
    nome: "Maria",
    idade: 17,
    email: "duda@gmail.com",
    senha: "12346"
}

const {email, senha} = pessoa

console.log(email)
console.log(senha)