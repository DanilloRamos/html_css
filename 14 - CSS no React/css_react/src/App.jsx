import './App.css'

//CSS de componente
import MyComponent from '../../components/MyComponent'


  //CSS Modules
  import Title from '../../components/Title'

function App() {
  //CSS dinâmico
  const n = 15

  //Classes dinâmicas
  const redTitle = true

  return (
    <>
      <div>
        {/*CSS Global */}
        <h1>CSS no React</h1>
        {/*CSS de componente */}
        <MyComponent/>
        <p>Pegou o CSS do componente</p>
        {/*Inline Style*/}
        <p style={{color: "blue", padding: "25px", borderTop:'1px dotted blue'}}>Este elemento tem estilos inline</p>
        {/*Inline style dinâmico*/}
        <h2 style={n > 10 ? {color: 'purple'} : {color: 'magenta'}}>
          CSS Dinâmico
        </h2>
         <h2 style={n > 20 ? {color: 'purple'} : {color: 'magenta'}}>
          CSS Dinâmico 2 
        </h2>
        {/*Classes dinâmicas*/}
        <h2 className={redTitle ? 'red-title' : 'title'}>
          Esse título terá uma classe
        </h2>
        {/*CSS Modules*/}
        <Title/>
       </div>
    </>
  )
}

export default App
