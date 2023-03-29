import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Formulario = (props) => {
  
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    console.log("Submit")
    if(!inputValue){
        alert("No hay nada")
        return
    }
    props.onSubmit(inputValue)
    setInputValue('')
  }

  function handleChange(e){
    e.preventDefault();
    const cleanValue = e.target.value.trim();
    //if(/[^a-zA-Z0-9]/.test(cleanValue)) return
    setInputValue(cleanValue)
    console.log("Cambio "+e.target.value)
  }

  return (
    <form onSubmit = {handleSubmit}>
    <input type="text" value={inputValue} onChange={handleChange} placeholder="Plato"/>
    <button type="submit">Agregar</button>
    </form>
  )
}

export default Formulario