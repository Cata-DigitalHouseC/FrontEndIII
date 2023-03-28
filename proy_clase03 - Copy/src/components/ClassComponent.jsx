import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(){
    super()
    /*Inicilizo el estado*/
    this.state = {
        name:'Cata',
        age: 20,
        country: 'Col'
    }

    this.changeName = this.changeName.bind(this) /*pAra que el metodo sea leido tengo que bindearlo*/

    }

    changeName(){
        if(this.state.name == 'Cata'){
        this.setState({name:"CataMaria"})}
        else {
            this.setState({name:"Cata"})
        }
    }
    
  render() {
    console.log(this)
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick = {this.changeName}>Cambiar Nombre</button>
      </div>
    )
  }
}
