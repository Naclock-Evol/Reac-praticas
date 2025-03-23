import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./logic/constants"
import { checkEndGame, checkWinner } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { resetGameToStorage, saveGameToStorage } from "./logic/storage"


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.O
  })
  const [winner, setWinner] = useState(null)

  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.O)
    setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
