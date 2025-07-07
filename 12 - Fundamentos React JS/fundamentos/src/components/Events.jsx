import React from 'react'

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log('Executou')
    }

    //Função de renderização
    const renderSomething = () => {
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }


  return (
    <div>
        <div>
            <button onClick={() => console.log('Testando um evento')}>Clique aqui</button>
        </div>
        {/*Evento com função*/}
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>
        {/*Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events