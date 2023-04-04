import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const {recipes} = useRecipeStates()
    console.log(recipes  )
    const params= useParams()
    const recipeSelected = recipes.find((recipe)=>params.id == recipe.id)

  return (
    <div>
        <h1>{recipeSelected.title} </h1>
        <img src={recipeSelected.image} alt={recipeSelected.title}/>
        <p>{recipeSelected.instructions}</p>
    </div>
  )
}

export default RecipeDetail