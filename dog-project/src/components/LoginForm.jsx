import React from 'react'
import { useState } from 'react'
import { useRecipeStates } from '../Context/RecipeContext'

const LoginForm = (handleClick) => {

  const {setAuth} = useRecipeStates()
  const [user,setUser]=useState({
    email:'',
    password:''
  })

  


  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email) //o (regex).test....
    console.log('email ',user.email,'password ',user.password)
    if(emailTest && user.password.length>5){
      const id =''
      localStorage.setItem('token', id)
      setAuth(false)
      alert('ok')
    }else{
      alert('Email o contraseña incorrectos')
    }
  }    
  return (
    <div>
        <h3>Debe loguearse!</h3>
        <form onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="email" role="email" name="username" 
            onChange={(e)=>setUser({...user,email:e.target.value})}
            />
            <label>Contraseña</label>
            <input type="password" data-testid="pass" name="password" 
            onChange={(e)=>setUser({...user,password:e.target.value})}
            />
            <button type="submit" onClick={handleClick}>Ingresar</button>
        </form>
    </div>
  )
}

export default LoginForm