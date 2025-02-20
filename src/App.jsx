import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>I am from App Jsx</h1>
      <Header></Header>
      
    </>
  )
}

export default App
