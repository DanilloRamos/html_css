import React from 'react'

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="text" id="name" placeholder='Digite o seu nome' value={data.name || ''} onChange={(e) => updateFieldHandler('name', e.target.value)} required />
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder='Digite o seu e-mail' value={data.email || ''} onChange={(e) => updateFieldHandler('email', e.target.value)} required />
        </div>
    </div>
  )
}

export default UserForm