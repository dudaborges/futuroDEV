const alunos = [
    {nome: 'Maria', idade: 17},
    {nome: 'João', idade: 18},
    {nome: 'José', idade: 15}
]

const maiorIdade = alunos.filter(function(aluno){
    return aluno.idade >= 18
})

console.log(maiorIdade)