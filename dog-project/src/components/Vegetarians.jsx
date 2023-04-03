import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { routes } from '../routes'

const Vegetarians = () => {
  return (
    <div>
        <h1>Vegetarianas</h1>
        <Link to = {routes.veggie}><h3>Veggies</h3></Link>
        <Outlet/>
    </div>
  )
}

export default Vegetarians