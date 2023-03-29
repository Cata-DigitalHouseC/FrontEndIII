import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Pedido from './components/Pedido'
import viteLogo from '/vite.svg'


let id = 0

function App() {
  const [pedidos,setPedidos] = useState([])


  function agregarPedido(pedido){
    setPedidos([...pedidos,{id:id++, nombre: pedido}])
  }

  function handleDeletePedido(id){
    const pedidos1 = pedidos.filter((pedido) => pedido.id!==id)
    setPedidos(pedidos1)
  }

  return (
    <div className="App">
      <header title="App comidas"/>
      <Formulario onSubmit = {agregarPedido}/>
      <hr/>
      {pedidos.map((pedido) => {
        return <Pedido key={pedido.id} pedido={pedido} onDelete={handleDeletePedido}/>
      })}
    </div>
  )
}

export default App
