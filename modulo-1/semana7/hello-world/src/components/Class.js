import React from "react";
// extends é um conceito de herança
// o filho herda toda a herança do pai
class Class extends React.Component{

    constructor(props){
        super(props)
        this.modelo = '2020'
        // pra inicializar as variáveis
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }

    componentWillUnmount(){
        console.log('fui destruido')
    }

    render(){
        return (
            <div>
                <h1>Meu onix</h1>
                <p>Modelo {this.modelo}</p>
                <p>Ligado {this.ligado}</p>
                <p>velAtual {this.velAtual}</p>
            </div>
        )
    }
}

export default Class