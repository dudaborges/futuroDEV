function tabuada (multiplicador){
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const resultado = []
    
    for(let numero of numeros){
        resultado.push(numero * multiplicador)
    }

    return resultado
}

console.log(tabuada(5))