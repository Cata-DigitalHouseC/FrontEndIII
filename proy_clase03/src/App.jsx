
import './App.css' 
import Card from './components/Card'
import ClassComponent from './components/ClassComponent'
import FuncComponent  from './components/FuncComponent'

function App() {

  let a ='Elemento 0'
  let elementos =[1,2,3]


  return (
/*CON COMPONENTES*/
    <>
      <ClassComponent />
      <FuncComponent />
      <FuncComponent />


      
      <h1> Titulo de Card: Elemento </h1>
      <Card elemento = {elementos[0]} /> {/*Elemento 1  */}
      <Card elemento = {elementos[1]} /> {/*Elemento 1  */}
      <Card elemento = {elementos[2]} /> {/*Elemento 1  */}
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
