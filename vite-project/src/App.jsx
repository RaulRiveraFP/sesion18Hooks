import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Home } from './vistas/Home'

function App() {
  const coloresAzules = ['bg-blue-100', 'bg-blue-300', 'bg-blue-500', 'bg-blue-700']
  const [ colorApp, setColorApp] = useState('bg-blue-500')


  return (
    <>
      <div className={`${colorApp} p-3`}>
        
        <Header colorApp={colorApp} setColorApp={setColorApp} coloresAzules={coloresAzules}/>
        <Home/>
      </div>
    </>
  )
}

export default App
