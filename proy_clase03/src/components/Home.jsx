import Card from './Card'
import NavBar from './NavBar'
import {homeStyles} from './homeStyles'


const Home = () => {

    let pizzas = [
        {id:1, tipo: 'Mozzarella', precio: '$1200', img:'https://www.recetas-argentinas.com/base/stock/Recipe/23-image/23-image_web.jpg'},
        {id:2, tipo: 'Napolitana', precio: '$1500', img:'https://www.recetas-argentinas.com/base/stock/Recipe/41-image/41-image_web.jpg'},
        {id:3, tipo: 'Jamon y Morron', precio: '$1800', img:'https://www.recetas-argentinas.com/base/stock/Recipe/42-image/42-image_web.jpg'},
        {id:4, tipo: 'Calabresa', precio: '$2000', img:'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg'},
        {id:5, tipo: 'Muzzarella', precio: '$1200', img:'https://www.recetas-argentinas.com/base/stock/Recipe/44-image/44-image_web.jpg'}
    ]
    console.log('imagenes')
    console.log(pizzas.map((pizza) => pizza.img))
  return (
    <div>
        <NavBar/>
        <h1>Home Bienvenidos a la Pizzeria DH</h1>
        <div style={homeStyles}>
            {pizzas.map((pizza) => <Card pizza={pizza}/>)}
        </div>
    </div>
  )
}

export default Home