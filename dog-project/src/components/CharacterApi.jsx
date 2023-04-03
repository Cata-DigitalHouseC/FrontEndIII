import React from 'react'
import { useState, useEffect } from 'react'

conCharacterApi = () => {
    const[character, setCharacter] = useState([]) //son estados, no variables
    const url = 'https://rickandmortyapi.com/api/character/1'

    useEffect(()=>{
        const fetchData = async () =>{
            let response = await fetch(url);
            let data = await response.json();
            setCharacter(data)
        }
        fetchData()
    },[])

  return (
    <div>
        <h1>Character</h1>

    </div>
  )
}

export default Character