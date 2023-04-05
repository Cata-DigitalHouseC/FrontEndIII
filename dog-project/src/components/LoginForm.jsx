import React from 'react'

const LoginForm = (handleClick) => {

  const [user,setUser]=useState({
    email:'',
    password:''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    if(emailTest && user.password.length>5){
      const id =''
    }else{
      alert('Email o contraseña incorrectos')
    }  
  return (
    <div>
        <h3>Debe loguearse!</h3>
        <form onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="text" role="email" name="username" />
            <label>Contraseña</label>
            <input type="password" data-testid="pass" name="password" />
            <button type="submit" onClick={handleClick}>Ingresar</button>
        </form>
    </div>
  )
}

export default LoginForm