import React from 'react'

const Pedido = (props) => {

function handleDelete(){

    props.onDelete(props.pedido.id)

}

  return (
    <div>
        {props.pedido.id}    
        {props.pedido.nombre}
        <button onClick = {handleDelete}>delete</button>    
    </div>
  )
}

export default Pedido