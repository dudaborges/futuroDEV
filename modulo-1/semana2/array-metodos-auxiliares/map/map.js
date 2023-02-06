const nomes = ["maria", "joão", "josé"]

// percorre a todos os items do array igual ao foreach, mas é útil para quando queremos modificar os itens.

const caixaAlta = nomes.map(function(nome){
    return nome.toUpperCase()
})

console.log(caixaAlta)