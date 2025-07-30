import HookUseState from "../components/HookUseState"
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

import {useContext} from 'react'
import {SomeContext} from '../components/HookUseContext'
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"

const Home = () => {
  const {contextValue} = useContext(SomeContext)
   return (
    <div>
        <h1>Home</h1>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback/>
    </div>
  )
}

export default Home