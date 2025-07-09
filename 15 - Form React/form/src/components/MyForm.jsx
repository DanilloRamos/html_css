import './MyForm.css'

import { useState } from 'react'

const MyForm = ({userName, userEmail}) => {

    //gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState('')
    const [role, setRole] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    
    //Envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio)

        setName('')
        setEmail('')
        setBio('')
    }


    return (
        <div>
            {/*Criação de Form*/}
            {/*Envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name || ''}/>
                </div>
                {/*Label envolvendo input*/}
                <label>
                    <span>E-mail:</span>
                    {/*Simplificando manipulação*/}
                    <input type="text" name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
                </label>
                {/*Textarea*/}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/*Select*/}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}

export default MyForm