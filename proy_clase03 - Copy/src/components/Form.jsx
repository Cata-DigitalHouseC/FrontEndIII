import React, { useState } from 'react'

const Form = () => {

    const [persona, setPersona] = useState({
        name: '',
        bday: ''
    })
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Enviando Formulario')
        if(persona.name.length>3) setShow(true)
        console.log(show)
        alert('Tu nombre es '+persona.name + ' y cumplis ' + persona.bday)
        
    }
  return (
    <>
         <form onSubmit = {(e) => handleSubmit(e)}> {/*<form onSubmit = {(e) => handleSubmit(event)}></form> */}
            <label>nombre: </label>
            <input type="text" placeholder="Nombre" onChange = {(e) => setPersona({...persona, name: e.target.value})}/> {/*event.target.value */}
            <label>Tu cumple: </label>
            <input type="text" placeholder="Cumple"  onChange = {(e) => setPersona({...persona, bday: e.target.value})}/>
            <button>Enviar</button>
        </form>

        

        {
            show 
            ?
            <>
                <h3>Tu nombre es {persona.name}</h3>
                <h4>Cumplis en: {persona.bday}</h4>
            </>
            :
            null

        }
        {/* Equivalentemente puede ser */}
        {
            show &&
            <>
                <h3>Tu nombre es {persona.name}</h3>
                <h4>Cumplis en: {persona.bday}</h4>
            </>
        }    
    </>
  )
}

export default Form