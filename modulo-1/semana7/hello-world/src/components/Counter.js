import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('fui montado')
    }

    componentDidUpdate(){
        console.log('fui atualizado')
    }

    componentWillUnmount(){
        console.log('fui destruido')
    }

    Decrement() {
        this.setState({count: this.state.count -1})
    }

    Acrement() {
        this.setState({count: this.state.count +1})
    }


    render(){
        return (
            <div>
                <h1>Contador</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.Decrement()}>-</button>
                <button onClick={() => this.Acrement()}>+</button>
            </div>
        )
    }
}

export default Counter