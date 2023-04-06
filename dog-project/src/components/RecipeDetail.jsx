import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    //const {recipes} = useRecipeStates()
    console.log(recipes  )
    const params= useParams()
    const [recipeSelected, setRecipeSelected] = useState({})
    const url =  `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=5680785932f646ebadec8e5392fdee0e`
    //const recipeSelected = recipes.find((recipe)=>params.id == recipe.id)
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setRecipeSelected(data))
    })

  const addRecipe = () => {
    console.log('agregando receta')
    localStorage.setItem('recipe',JSON.stringify(recipeSelected))
  }  
  const showFav =()=>{
    let recipeFav = localStorage.getItem('recipe')
    
    console.log(JSON.parse(recipeFav))
  }

  return (
    <div>
        <h1>{recipeSelected.title} </h1>
        <img src={recipeSelected.image} alt={recipeSelected.title}/>
        <p>{recipeSelected.instructions}</p>
        <button onClick={addRecipe}>Agregar receta</button>
        <button onClick={showFav}>Mostrar recetaFav</button>
    </div>
  )
}

export default RecipeDetail