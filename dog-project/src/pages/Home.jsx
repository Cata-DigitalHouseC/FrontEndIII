import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {


  
  return (
    <div>
        <h1>Bienvenidos a recetas DH</h1>

        <Outlet/>
    </div>
  )
}
