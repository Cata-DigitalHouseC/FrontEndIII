import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = () => {

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    if('name'.length>3){
        navigate('/success')
    }
    } 

  return (
    <div className='navbar'>
        <button onClick={()=>navigate(-1)}>flecha</button>
        <Link to={routes.home}><h3>Inicio</h3></Link>
        <Link to={routes.ingredientes}><h3>Ingredientes</h3></Link>
        <Link to={routes.contacto}><h3>Contacto</h3></Link>
        <Link to={routes.about}><h3>About</h3></Link>

        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
  )
}

export default Navbar