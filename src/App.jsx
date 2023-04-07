import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
    </div>
    
  )
}

export default App
