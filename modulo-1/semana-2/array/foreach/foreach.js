let frutas = ["banana", "uva", "maça"]

// o index n é obrigatório, ele é útil quando for preciso saber a posição do array de cada item
// forEach significa para cada, serve para navegar por cada item da array

frutas.forEach(function(fruta, index){
    console.log(`${index}: ${fruta}`)
})