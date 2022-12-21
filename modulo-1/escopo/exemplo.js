// escopo global
let x = 3
let y = 6
console.log(x, y)

// escopo local
let teste = () => {
    let z = 10
    console.log(z)
}
teste()