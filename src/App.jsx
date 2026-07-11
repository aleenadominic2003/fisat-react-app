import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components.jsx/AddStudent'
import SearchStudent from './components.jsx/SearchStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStudent />
      <SearchStudent />
    </>
  )
}

export default App
