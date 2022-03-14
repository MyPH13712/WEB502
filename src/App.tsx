import { useState } from 'react'
import './App.css'
import ShowInfo from './ShowInfo'

type TProduct = {
  id: number,
  name: string,
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<TProduct[]>([{id:1, name: "My"}])

  return (
    <div className="App">
      <ShowInfo name = "dat"/>
    </div>
  )
}

export default App
