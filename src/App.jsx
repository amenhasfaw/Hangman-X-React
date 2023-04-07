import './App.css'
import {useState, useCallback, useEffect} from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import words from './wordList.json'

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState([])

  const incorrectLetters = () => guessedLetters.filter(
    letters => !wordToGuess.includes(letters)
  )

  const isLoser = incorrectLetters >= 6
  const isWinner = wordToGuess.split('')
                    .every(letter => guessedLetters.includes(letter))

  
  const addGuessedLetter = useCallback(
    letter => {
      if(guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((currentLetters) => [...currentLetters , letter])
    },
    [guessedLetters,isLoser,isWinner],
  )
  
  useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('Keypress', handler)
  
    return () => {
      document.removeEventListener('Keypress',handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if(key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  },[])
  

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}>
      <HangmanDrawing/>
      <HangmanWord/>
      <div style={{ alignSelf: "stretch" }}><Keyboard/></div>
    </div>
    
  )
}

export default App
