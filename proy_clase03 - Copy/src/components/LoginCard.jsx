import React from 'react'

const LoginCard = ({user}) => { /*(props) si ahy muchos objetos*/
    const {email, pass} = user;
    console.log(email+'email')
    console.log(pass+'pass')
    console.log(user+'user en Login Card')
  return (
    <>
    <h4>Se ha logueado con éxito!! </h4>
    <h3>Tu nombre es email {user.name}</h3>
    <h4>Cumplis en pass: {user.bday}</h4>
</>
  )
}

export default LoginCard