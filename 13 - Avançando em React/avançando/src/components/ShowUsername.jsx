import React from 'react'

function ShowUsername(props) {
  return (
    <div>
        <h2>O nome do usuário é {props.name}</h2>
    </div>
  )
}

export default ShowUsername