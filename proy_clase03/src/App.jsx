
import './App.css' 
import OtroClassComponent from './components/ClassComponent' /*Puedo usar otros nombres, el ya sabe que exportara y usara*/
import FuncComponent  from './components/FuncComponent'
import Home from './components/Home'

function App() {

  let a ='Elemento 0'
  let elementos =[1,2,3]


  return (
/*CON COMPONENTES*/
    <>

      <h1> Hola Mundo Clase 3</h1>    
      <OtroClassComponent />
      <FuncComponent />
      <FuncComponent />


      
      <h1> Titulo de Card: Elemento Clase 4</h1>
   {/*    <Card elemento = {elementos[0]} /> */}{/*Elemento 1  */}
    {/*  <Card elemento = {elementos[1]} /> */}{/*Elemento 1  */}
      

      <h1> Titulo de Card: Elemento Clase 5</h1>
      <Home/>
    </>



/*     <>   SIN COMPONENTES
    <h1> Hola Mundo</h1>
    <h2>titulo</h2>
    <ul>
      <li>{a}</li>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    </> */
  )
}

export default App
