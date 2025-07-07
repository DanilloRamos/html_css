import React from 'react'

function ConditionalRender() {
   
    const x = 5
    const name = 'Danillo'

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true, sim!</p>}
        {name === 'Danillo' ? (
            <div>
                <p>Olá Danillo!</p>
            </div>
        ) : ( <div>7
            <p>Nome não encontrado!</p>
        </div>)}
    </div>
  )
}

export default ConditionalRender