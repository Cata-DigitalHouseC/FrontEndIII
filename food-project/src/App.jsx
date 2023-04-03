import { useState } from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="App">
      {toggle ? 
        <ClassComponent titulo='Es un componente de Clase'/>
        :
        <FuncComponent titulo='Es un componente de funcion'/>
      }
      <button onClick={() => setToggle(!toggle)}>
        Cambiar a componente de {toggle ? 'funcion' : 'clase'}
      </button>  
    </div>
  )
}

export default App
