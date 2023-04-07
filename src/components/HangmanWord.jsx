export default function HangmanWord({reveal = false, guessedLetters, wordToGuess}) {
  
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid #ddd" }} key={index}>
          <span
            style={{
              color: !guessedLetters.includes(letter) && reveal 
                     ? 'red'
                     : '#ddd',
              visibility: 
                guessedLetters.includes(letter) || reveal 
                ? "visible"
                : "hidden"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
