// funções aninhadas
// get obter e set editar
let criaPet = function(nomeDoPet){
    return {
        getName: function(){
            return nomeDoPet
        },
        setName: function(novoNome){
            nomeDoPet = novoNome
        }
    }
}

let cachorro = criaPet("Nina")
cachorro.setName("Marcia")
console.log(cachorro.getName())