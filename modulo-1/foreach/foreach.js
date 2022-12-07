let frutas = ["banana", "uva", "maça"]

// o index n é obrigatório, ele é útil quando for preciso saber a posição do array de cada item
frutas.forEach(function(fruta, index){
    console.log(`${index}: ${fruta}`)
})