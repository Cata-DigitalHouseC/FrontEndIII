
import './App.css'
import { Home } from './pages/Home'
import  Ingredientes  from './pages/Ingredientes'
import  Contact  from './pages/Contact'
import  About  from './pages/About'
import RandomDog from './components/RandomDog'
import CharacterApi from './components/CharacterApi'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import {routes} from './routes'
import NotFound from './pages/NotFound'
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Vegetarians from './components/Vegetarians' 
import Deserts from './components/Deserts'
import Veggie from './components/Veggie'
import RecipeDetail from './components/RecipeDetail'
import { useEffect, useState } from 'react'



function App() {

  const handleClick = () => {}

  const [recipes, setRecipes] = useState([]);
  const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=5680785932f646ebadec8e5392fdee0e' //nomber param con el # de recetas, se separan con &  
  
  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setRecipes(data.recipes)) //del objeto data, traer el arreglo recipes
  },[])

  console.log(recipes)

  return (
    <div className="App">
      {/* <RandomDog/> */}
      {/* <Home/> */}
      {/* <CharacterApi/> */}

      {/* <LoginForm handleClick={handleClick}/> */}
      <Navbar/>
      <Routes path={routes.home} element={<Home/>}>
          <Route path={routes.vegetarians} element={<Vegetarians/>}/>
               <Route parth={routes.veggie} element={<Veggie/>}/>
          <Route path={routes.deserts} element={<Deserts/>}/>
        <Route/>
        <Route path={routes.ingredientes} element={<Ingredientes/>}/>
        <Route path={routes.recipes} element={<Recipes recipes={recipes}/>}/>
        <Route path={routes.recipe} element={<RecipeDetail recipes={recipes}/>}/>
        <Route path={routes.contacto} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element ={<NotFound/>}/>


      </Routes>


    </div>
  )
}

export default App
