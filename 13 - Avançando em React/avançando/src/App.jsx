import './App.css'

//Imagem em assets
import night from "./assets/night.jpg"

//useState
import Data from './components/data'

//Renderização de lista
import ListRender from "./components/ListRender"

//Render condicional
import ConditionalRender from './components/ConditionalRender'

//Props
import ShowUsername from './components/ShowUsername'

//Desestruturando props
import CarDetails from './components/CarDetails'

//Renderização de listas
const cars = [
  {id: 1, brand: 'Ferrari', color: 'Amarelo', km: 0},
  {id: 2, brand: 'KIA', color: 'Branco', km: 200000},
  {id: 3, brand: 'Renault', color: 'Azul', km: 32000},
]

//Fragment
import Fragments from './components/Fragments'

//Children
import Container from './components/Container'

//Funçao em prop
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'

//State Lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  //função em prop
  function showMessage(){
    console.log('Evento do componente pai')
  }

  //State Lift
  const [message, setMessage] = useState('')
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App" style={{paddingBottom: '500px'}}>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <img src='/img.jpg' alt='Alguma imagem'/>
      {/*Imagem em assets*/}
      <img src={night} alt="Outra imagem" />
      {/*useState */}
      <Data />
      {/*Render de lista*/}
      <ListRender />
      {/*Render Condicional */}
      <ConditionalRender/>
      {/*Props */}
      <ShowUsername name='Danillo'/>
      {/*Desestruturando props*/}
      <CarDetails brand='Vw' km={999} color="Vermelho"/>
      {/*Reaproveitamento de componentes*/}
      <CarDetails brand="Fiat" km={123444} color="Branco"/>
      <CarDetails brand="Audi" km={9987} color="Azul"/>
      {/*Renderização de lista com componente*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
      ))}
      {/*Fragment*/}
      <Fragments/>
      {/*Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
       {/*Função em prop */}
       <ExecuteFunction myFunction={showMessage}/>
       {/*State Lift */}
       <Message msg={message}/>
       <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
