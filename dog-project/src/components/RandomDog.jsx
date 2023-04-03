import React from 'react'
import { useState, useEffect } from 'react'


const RandomDog = () => {
  const [perrito, setPerrito] = useState('');
  const [change, setChange] = useState(false);
  const url ='https:dog.ceo/api/breeds/image/random'
  
  useEffect(()=>{ //Para que exec el fetch una sola vez
    fetchData()
  },[change])

  const fetchData = () =>{
    fetch(url)
        .then(response => response.json())
        .then(data => setPerrito(data))
        //.catch((err) => alert(err))
  }
  
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <img src = {perrito.message} alt='' width={300}/>
        {/* <button onClick={()=> fetchData()}>Cambiar de perrito</button>  --Una opcion */}
        <button onClick={()=> setChange(!change)}>Cambiar de perrito</button>
    </div>
  )
}

export default RandomDog