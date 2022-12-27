//basta um item for true e ele retorna true
const alunos = [
    {nome: 'Maria', idade: 17},
    {nome: 'João', idade: 18},
    {nome: 'José', idade: 15}
]

const algumAlunoMaiorDeIdade = alunos.some(function(aluno){
    return aluno.idade >= 18
})

console.log(algumAlunoMaiorDeIdade)