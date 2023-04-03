import React, { Component } from 'react'

export default class ClassComponent extends Component {
  
    constructor(){
        super()
        this.state = {
            name: 'Catalina'
        }
        console.log('se ejecuta el constructor')
        console.log(this.state.name)
    }

    //Ciclo de vida
    //Montaje
    componentDidMount(){
        console.log('se ejecuta el componentDidMount')
        setTimeout(()=>{
            this.setState({name: 'Juana'})
        },200)
    }

    componentDidUpdate(){
        console.log('se ejecuta el componentDidUpdate')
        console.log(this.state.name)
    }

    componentWillUnmount(){
        console.log('se ejecuta el componentWillUnmount, desmonto el componente de clase')
    }
  
    render() {
        console.log('se ejecuta el render de la clase')
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}
