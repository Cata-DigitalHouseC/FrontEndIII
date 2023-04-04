import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import { Link, Outlet } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'
import {RecipeStates} from '../Context/RecipeContext'


const Recipes = () => {

  const {recipes} = useRecipeStates()
  //const {recipes} = useContext(RecipeSates)

  return (
    <div>
        <h1>Recetas</h1>
        {recipes.map(recipe => <Link key = {recipe.id} to={`/recipe/`+recipe.id}><Card key={recipe.id} recipe={recipe}/></Link>)}
    </div>
  )
}

export default Recipes