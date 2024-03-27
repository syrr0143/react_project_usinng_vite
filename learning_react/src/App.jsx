import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const clicked = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-red-600 bg-green-400 rounded-lg">
        Hello world!
      </h1>
    </>
  )
}

export default App
