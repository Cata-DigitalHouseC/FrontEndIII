

const NavBar = () => {

    let titulos= ['Home','Productos','About Us','Contacto']
  return (
    <div>
        <ul>
            {titulos.map((titulo,index)=><li key={index}>{titulo}</li>)}
        </ul>
    </div>
  )
}

export default NavBar