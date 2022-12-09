// let pet = {
//     nome: "Jully",
//     idade: 4,
//     pelagem: 'branca'
// }

// let {nome, idade, pelagem} = pet

// console.log(`O pet se chama ${nome}, tem ${idade} anos e pelagem ${pelagem}`)

// com function, o ideal é não colocar console log dentro de uma função, já que o q tu vai fazer com o dado depois tu q define

let pet = {
    nome: "Jully",
    idade: 4,
    pelagem: 'branca'
}

const apresentaPet = ({nome, idade, pelagem}) => {
    return `O pet se chama ${nome}, tem ${idade} anos e pelagem ${pelagem}`
}



console.log(apresentaPet(pet))