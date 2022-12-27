const multiplicar = (multiplicador, ...valores) => {
    let produto = []
    valores.forEach(valor => produto.push(valor * multiplicador))
    return produto
}

console.log(multiplicar(2, 1, 2, 3, 4))