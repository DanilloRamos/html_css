import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Danillo", "José", "João"])

    const [users, setUsers] = useState([
        {id: 1, name:'Danillo', age: 37},
        {id: 2, name: 'João', age: 25},
        {id: 3, name:'Pedro', age: 17}
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random()*4)

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
    )
    }

  return (
    <div>
        {/*Render sem key*/}
        <ul>
           {list.map((item) => (
            <li>{item}</li>
           ))}
        </ul>

        {/*Render com key*/}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/*Previous State*/}
        <button onClick={deleteRandom}>Deletar usuário aleatório</button>
    </div>
  )
}

export default ListRender