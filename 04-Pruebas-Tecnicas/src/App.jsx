import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImg } from './hooks/useCatImage'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImg({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>cat curiosities</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`Image extracted using the first words for ${fact} `} />}
    </main>
  )
}

export default App
