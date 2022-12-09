let bermudas = ["Jeans", "Sarja"]
let camisetas = ["Polo", "Manga Curta"]
let sapatos = ["Tênis", "Chinelo"]

let estoque = [...bermudas, ...camisetas, ...sapatos]

const exporNaVitrine = (...items) =>{
    items.forEach(item => console.log(`Item ${item} exposto na vitrine`))
}

//spread
console.log(...estoque)