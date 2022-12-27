// for of é uma função, não um método
const alunos = [
    {nome: 'Maria', idade: 17},
    {nome: 'João', idade: 18},
    {nome: 'José', idade: 15}
]

for(let aluno of alunos){
    console.log(aluno)
}