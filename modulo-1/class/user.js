class User{
    constructor(firstName, lastName){
        // referenciar
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// instanciar: inicializar o objeto
const user = new User("Maria", "Borges")
// chamada do método
user.getFullName()