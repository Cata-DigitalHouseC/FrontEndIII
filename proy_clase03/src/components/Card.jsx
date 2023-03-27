import './Card.css'

const Card = ({pizza}) => {
  return (
      

        <div key = {pizza.id} className= 'card' >
                    <img src = {pizza.img} className= 'card-img'/>
                    <h3 className= 'card-title'>{pizza.tipo}</h3>
                    <h4 className= 'card-price'>{pizza.precio}</h4>
        </div>

        /* <h3> Titulo card: elemento # {props.elemento}</h3> */
    
  )
}

export default Card