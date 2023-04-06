import React, { useReducer } from 'react'


const initialState={
    users: [
        {id:1,userName: "Gerardo", email: "gerar@mail.com"},
        {id:2,userName: "Juan", email: "juan@mail.com"},
        {id:3,userName: "Pedro", email: "peadro@mail.com"},

    ],
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'addUser':
            return {users: [...state.users, action.payload]}
        case 'deleteUser':
            return {users: state.users.filter(user=>user.id!==action.payload)}
        default:
            throw new Error
        
    }
}

const UserList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [newUser, setNewUser] = useState({id:0, userName:'', email:''})

    const handleChange = (e) =>{
        setNewUser({
            ...newUser, 
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type:'addUser', payload: newUser})
    }

  return (
    <div>
        <ul>
            {state.users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul> 

        <form onSubmit={handleSubmit}>
            <input type="number" name="id" onChange={handleChange}/>
            <input type="text" name="userName" onChange={handleChange}/>
            <input type="text" name="email" onChange={handleChange}/>
            <button type="submit">Agregar</button>
        </form>

    </div>
  )
}

export default UserList