import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export const Home = () => {

  const [recipes, setRecipes] = useState([]);
  const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=5680785932f646ebadec8e5392fdee0e' //nomber param con el # de recetas, se separan con &  
  
  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setRecipes(data.recipes)) //del objeto data, traer el arreglo recipes
  },[])

  console.log(recipes)
  
  return (
    <div>
        <h1>Recetas</h1>
        {recipes.map(recipe => <Card key={recipe.id} recipe={recipe}/>)}
    </div>
  )
}
