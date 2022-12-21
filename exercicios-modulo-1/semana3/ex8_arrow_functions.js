// function tabuada (multiplicador){
//     const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     const resultado = numeros.map(function(numero){
//         return numero * multiplicador
//     })

//     return resultado
// }

// console.log(tabuada(5))

let tabuada = (multiplicador) => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const resultado = numeros.map((numero) => {
        return numero * multiplicador
    })

    return resultado
}

console.log(tabuada(5))



