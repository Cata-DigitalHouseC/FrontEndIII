
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


function App() {

  const handleClick = () => {}
  return (
    <div className="App">
      {/* <RandomDog/> */}
      {/* <Home/> */}
      {/* <CharacterApi/> */}

      <LoginForm handleClick={handleClick}/>
      <Navbar/>
      <h1>Bienvenidos a recetas DH</h1>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.ingredientes} element={<Ingredientes/>}/>
        <Route path={routes.contacto} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element ={<NotFound/>}/>


      </Routes>


    </div>
  )
}

export default App
