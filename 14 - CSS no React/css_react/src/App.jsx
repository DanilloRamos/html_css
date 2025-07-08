import './App.css'

//CSS de componente
import MyComponent from '../../components/MyComponent'

function App() {

  return (
    <>
      <div>
        {/*CSS Global */}
        <h1>CSS no React</h1>
        {/*CSS de componente */}
        <MyComponent/>
        <p>Pegou o CSS do componente</p>
        {/*Inline Style*/}
        <p style={{color: "blue"}}>Este elemento tem estilos inline</p>
       </div>
    </>
  )
}

export default App
