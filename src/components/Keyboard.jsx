import React from 'react'
import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

export default function Keyboard({disabled, activeLetters,inactiveLetters, addGuessedLetter}) {
  return (
    <div
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
        gap: ".5rem",
    }}>
        {KEYS.map((key) => {
            
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            
            return (
                <button
                key={key}
                onClick={() => addGuessedLetter(key)}
                className={`${styles.btn} 
                            ${isActive ? styles.active : ''}
                            ${isInactive ? styles.inactive : ''}`} 
                disabled={isActive || isInactive || disabled}
                >
                    {key}
                </button>
            )
        })}

    </div>
  )
}
