import {useState, useEffect} from 'react'
import './App.css'

const url = 'http://localhost:3000/products'

function App() {
  //resgatando dados
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    getData()
  }, [])
 
  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/*resgate de dados*/}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
