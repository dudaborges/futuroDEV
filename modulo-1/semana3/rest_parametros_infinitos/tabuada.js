//operador rest
//coleta os itens que coloca em um array (itens esse do parâmetro)
const soma = (... valores) => {
    let resultado = 0
    valores.forEach(valor => resultado += valor)
    return resultado
}

console.log(soma(3, 2, 1))