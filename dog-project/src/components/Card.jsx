import React from 'react'

const Card = ({recipe}) => {
  return (
    <div key={recipe.id}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} width={300}/>
    </div>
  )
}

export default Card