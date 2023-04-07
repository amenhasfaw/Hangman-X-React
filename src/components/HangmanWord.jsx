export default function HangmanWord() {
  const letters = "Habesha"

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
      {letters.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid #ddd" }} key={index}>
          <span
            style={{
              color:"#ddd",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
