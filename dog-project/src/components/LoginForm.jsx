import React from 'react'

const LoginForm = (handleClick) => {
  return (
    <div>
        <h3>Debe loguearse!</h3>
        <form>
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