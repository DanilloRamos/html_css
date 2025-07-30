import {useEffect, useState} from 'react'


const HookUseEffect = () => {
    //useEffect sem dependências
    useEffect(() => {
        console.log('Sendo executado')
    })

const [number, setNumber] = useState(1)

const changeSomething = () => {
    setNumber(number + 1)
}

//array de dependências vazio
useEffect(() => {
    console.log('Serei executado apenas uma vez')
}, [])

//array de dependências com valores
const [anotherNumber, setAnotherNumber] = useState(0)

useEffect(() => {

    if (anotherNumber>0) console.log('Sou executado apenas quando muda o anotherNumber')

}, [anotherNumber])

//cleanup do useEffect
useEffect(() => {
    const timer = setTimeout(() => {
        console.log('Hello World')
        setAnotherNumber(anotherNumber + 1)
    }, 2000)

    return () => clearTimeout(timer)

}, [anotherNumber])

    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber+1)}>Mudar o Another Number</button>
        </div>
    )
}

export default HookUseEffect