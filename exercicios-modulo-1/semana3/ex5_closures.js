let createPerson = function(name){
    return{
        setName: function(newName){
            name = newName
        },

        getName: function(){
            return name
        },

    }
}

let person = createPerson("Maria")

let familia = []
familia.push(person.getName())

console.log(familia)