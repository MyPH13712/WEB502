import { useState } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';

function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "My",
    age: 20
  })

const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      Count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfo info={info} />
    </div>
  )
}

export default App
