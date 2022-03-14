import { useState } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type {ProductType} from './types/product';

function App() {
const [info, setInfo] = useState<ProductType>({
  name: "My",
  age: 20
})

  return (
    <div className="App">
        <ShowInfo info={info}/>
    </div>
  )
}

export default App
