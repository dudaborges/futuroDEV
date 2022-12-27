const alunos = [
    {nome: 'Maria', idade: 17},
    {nome: 'João', idade: 18},
    {nome: 'José', idade: 15}
]

// para buscar um elemento específico
const aluno = alunos.find(function(aluno){
    return aluno.nome === "José"
})

console.log(aluno)