import React from "react";

class OcultarElmento extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            div: true
        }
        
    }

    desaparecer(){
        this.setState({div: !this.state.div})
    }

    render(){

        return(
            <div>
            {this.state.div ? <div>Isso vai desaparecer</div> : ''}
            <button onClick={() => {this.desaparecer()}}>Desaparecer</button>
            </div>
        )
    }
}

export default OcultarElmento