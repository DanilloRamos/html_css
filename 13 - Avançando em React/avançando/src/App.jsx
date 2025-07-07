import './App.css'

//Imagem em assets
import night from "./assets/night.jpg"

//useState
import Data from './components/data'

function App() {

  return (
    <div className="App" style={{paddingBottom: '500px'}}>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <img src='/img.jpg' alt='Alguma imagem'/>
      {/*Imagem em assets*/}
      <img src={night} alt="Outra imagem" />
      {/*useState */}
      <Data />
    </div>
  )
}

export default App
