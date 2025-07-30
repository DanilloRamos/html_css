import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
    
    const [counter, setCounter] = useState()
    const getItemsFromDatabase = () => {
        return ['a','b','c','d']
    }

    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase}/>
            <button onClick={() => setCounter(counter + 1)}>Alterar Valor</button>
            <p>{counter}</p>
            <hr />
        </div>
    )
}

export default HookUseCallback