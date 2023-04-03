import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link, Outlet } from 'react-router-dom'


const Recipes = ({recipes}) => {



  return (
    <div>
        <h1>Recetas</h1>
        {recipes.map(recipe => <Link key = {recipe.id} to={`/recipe/`+recipe.id}><Card key={recipe.id} recipe={recipe}/></Link>)}
    </div>
  )
}

export default Recipes