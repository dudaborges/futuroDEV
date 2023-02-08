import React from "react";

class CicloDeVida extends React.Component{

    constructor(props){
        super(props)
        this.modelo = '2020'
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }

    componentDidMount(){
        console.log('fui montado')
    }

    componentDidUpdate(){
        console.log('fui atualizado')
    }

    ligouDesligou(){
        this.setState({ligado: true})
    }

    render(){
        return (
            <div>
                <h1>Meu onix</h1>
                <p>Modelo {this.modelo}</p>
                <p>Ligado {this.state.ligado ? 'sim' : 'não'}</p>
                {/* ? '' : '' se chama ternário, é igual ao if else*/}
                <button onClick={() => this.ligouDesligou()}>Ligar Carro</button>
                <p>velAtual {this.velAtual}</p>
            </div>
        )
    }
}

export default CicloDeVida