import { useState } from "react"

const HookUseState = () => {
    //useState
    let userName = 'João'
    const [name, setName] = useState("Danillo")

    const changeNames= () => {
        userName = 'João da Silva'
        setName('Danillo Ramos')
    }

    //useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

    return (
        <div>
            {/*useState*/}
            <h2>useState</h2>
            <p>variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
            {/*useState e input*/}
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos</p>
            <hr />
        </div>
    )
}

export default HookUseState