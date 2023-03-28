import {useState} from 'react'

const FuncComponent = () => {

  console.log(useState)
/*
  const myObj={
    id:0,
    name:'Cata',
    country: 'Col'
  }

  const {id,name,country}= myObj                                
*/


const [name, setName] = useState('Fer')
const [estudiante, setEstudiante] = useState({
    name:'Fer',
    age: 20,
    country: 'Col'
})

const newObj ={
    ...estudiante,
    materias: 12,
    promedio: 8.3
}

const changeName = () => {
    if(estudiante.name=='Fer') setEstudiante({...estudiante, name: 'Ale'})
    else setEstudiante({...estudiante, name: 'Fer'})
}
  return (
    <div>
        <h2>{estudiante.name}</h2>
        <button onClick = {changeName}>Cambiar Nombre</button>
    </div>
  )
}

export default FuncComponent