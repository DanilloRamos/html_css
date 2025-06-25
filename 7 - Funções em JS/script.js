//Declaração de função
function myFunction(){
    console.log('Testando...')
}

myFunction()


//Função guardada na variável - consistência no código
const myFunctionVar = function() {
    console.log('Esta é uma função em variável')
}

myFunctionVar()

//Função com parâmetro
function funcaoComParametro (txt) {
    console.log(`Imprimindo ${txt}`)
}

funcaoComParametro('alguma coisa')
funcaoComParametro('outro texto com a mesma função')

//Função com retorno
const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1, n2) {
    return n1 + n2
}

const result = soma(a,b)
console.log(result)
console.log(soma(c,d))

//Escopo da função
let y = 10

function testandoEscopo(){
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}

testandoEscopo()
console.log(`Y fora da função é ${y}`)

//Escopo aninhado
let m = 10

function escopoAninhado() {
    let m = 20

    if (true) {
        let m = 30

        if (true) {
            let m = 40
          
            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

console.log(m)
escopoAninhado()

//Arrow Function
const testArrow = () => {
    console.log('Esta é uma arrow function!')
}

testArrow()

const parOuImpar = (n) => {
   return n % 2 === 0 ? 'par':'ímpar'
}

console.log(parOuImpar(5))
console.log(parOuImpar(4))

const quadrado = (x) => x*x //bloco omitido
console.log(quadrado(4))

//Parâmetros opcionais
const multiplicar = function(m, n) {
    if (n === undefined) {
        return m*2
    } else {
        return m*n
    }
}

console.log(multiplicar(5))
console.log(multiplicar(4, 5))

const greeting = (name) => {
    if (!name) {
        console.log('Olá')
        return
    }

    console.log(`Olá ${name}`)
}

greeting()
greeting('Danillo')

//Argumento default
const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}

console.log(customGreeting('Danillo'))
console.log(customGreeting('João', 'Bom dia'))

const repeatText = (text, repeat = 2) => {
    for (let i=0; i<repeat; i++) {
        console.log(text)
    }
}

repeatText('Testando')
repeatText('Agora repete 5 vezes', 5)

//Closure
function someFunction() {
    let txt = 'Alguma coisa'

    function display() {
        console.log(txt)
    }

    display()
}

someFunction()

const multiplicaClosure = (n) => {
    return (m) => {
        return n*m
    }
}

const c1 = multiplicaClosure(5)
const c2 = multiplicaClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

//Recursão
const untilTen = (n, m) => {
    //condição de parada
    if (n < 10) {
        console.log('A função parou de executar!')
    } else {
        const x = n - m
        console.log(x)
        untilTen(x, m)
    }
}

untilTen(100,7)

function fatorial(x) {
    if (x===0) return 1
    return x * fatorial(x-1)
}

console.log(fatorial(6))