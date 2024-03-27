import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('')

  return (
    <>
      <div className={`${color}  justify-center bottom-12  w-full h-96 duration-500`}>

      </div>
      <div className='bg-slate-400 rounded-3xl'>
        <button className="shadow-lg rounded-lg border-2 border-gray p-2 m-5 bg-red-500 hover:bg-white " onClick={() => { setcolor('bg-red-500') }} >red</button>
        <button className={` shadow-lg rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-green-500`} onClick={() => { setcolor('bg-green-500') }} >green</button>
        <button className={`shadow-lg rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-pink-500`} onClick={() => { setcolor('bg-pink-500') }} >pink</button>
        <button className={`rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-yellow-500`} onClick={() => { setcolor('bg-yellow-500') }} >yellow</button>
        <button className={`rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-blue-500`} onClick={() => { setcolor('bg-blue-500') }} >blue</button>
        <button className={`rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-gray-500`} onClick={() => { setcolor('bg-gray-500') }} >gray</button>
        <button className={`rounded-lg border-2 border-gray p-2 m-5 hover:bg-white bg-orange-400`} onClick={() => { setcolor('bg-orange-400') }} >orange</button>
      </div>

    </>
  )
}

export default App
