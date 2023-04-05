
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
  const auth= true;
  const handleClick = () => {}


  return (
    <div className="App">
      {auth ? null: <Navbar/>}
      {/* <RandomDog/> */}
      {/* <Home/> */}
      {/* <CharacterApi/> */}

      {/* <LoginForm handleClick={handleClick}/> */}
    
      <Routes>
        {auth
         ? 
         <Route path='/' element={<LoginForm/>}/>
         :
         <>
        <Route path={routes.home} element={<Home/>}>
              <Route path={routes.vegetarians} element={<Vegetarians/>}>
                <Route parth={routes.veggie} element={<Veggie/>}/>
               </Route>
              <Route path={routes.deserts} element={<Deserts/>}/>
        </Route>
        <Route path={routes.ingredientes} element={<Ingredientes/>}/>
        {/* <Route path={routes.recipes} element={<Recipes recipes={recipes}/>}/>
        <Route path={routes.recipe} element={<RecipeDetail recipes={recipes}/>}/> */}
        <Route path={routes.recipes} element={<Recipes/>}/>
        <Route path={routes.recipe} element={<RecipeDetail/>}/>
        <Route path={routes.contacto} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element ={<NotFound/>}/>

        </>
        }
      </Routes>


    </div>
  )
}

export default App
