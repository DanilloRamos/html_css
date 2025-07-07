import './App.css'
//Importando componente
import FirstComponent from './components/FirstComponent'

//Hierarquia de Componentes
import MyComponents from './components/MyComponents'

//Template Expression
import TemplateExpressions from './components/TemplateExpressions'

//Eventos
import Events from './components/Events'

function App() {

  return <div className="App">
    <h1>Fundamentos do React</h1>
    <FirstComponent/>
    <TemplateExpressions/>
    <MyComponents />
    <Events/>
  </div>
}

{/*Comentário JSX*/}

export default App
