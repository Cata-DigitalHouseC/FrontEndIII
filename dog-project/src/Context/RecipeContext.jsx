import {createContext, useContext, useState, useEffect} from 'react'


export const RecipeStates = createContext()

const Context = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=5680785932f646ebadec8e5392fdee0e' //nomber param con el # de recetas, se separan con &  
    const [auth, setAuth] = useState(true)

    useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data => setRecipes(data.recipes)) //del objeto data, traer el arreglo recipes
    },[])
    let token = localStorage.getItem('token')
    useEffect(()=>{
    },[auth])

    return(
        <RecipeStates.Provider value = {{recipes, setRecipes, token, auth, setAuth}}>
            {children}
        </RecipeStates.Provider>
    )

}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)