import React from 'react'
import {useState, useEffect} from 'react'

const FuncComponent = ({titulo}) => {
    const [name, setName] = useState('Paula')
    const[count,setCount] = useState(0)

    useEffect(()=>{
        console.log('Se montó el comp de fn')
        setTimeout(()=>{
            setName('Maria')
        },2000)
        return ()=>{
            console.log('Se desmontó el comp de fn')
        }
    },[])

    useEffect(()=>{
        console.log('Se actualizó el count de comp de fn')
        /*
        setTimeout(()=>{
            setCount(count+1)
        },2000)
        */
    },[count])
    console.log('Se ha renderizado el comp de fn')

  return (
    <div>
        <h1>{titulo}</h1>
        <h3>{name}</h3>
        <button onClick={()=>setCount(count+1)}>Sumar</button>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count-1)}>Restar</button> 
    </div>
  )
}

export default FuncComponent