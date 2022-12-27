let suco = {
    sabor: 'laranja',
    quantidade: '500ml'
}

let doce = {
    tipo: 'açúcar'
}

const descreveSuco = ({sabor, quantidade}, {tipo}) => {
    return `Este suco é de ${sabor}, tem ${quantidade} é adoçado com ${tipo}`
}

console.log(descreveSuco(suco, doce))