
import './style/App.css'
import {  useEffect, useMemo, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un numero')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe de tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useMemo(() => {
    return debounce(search => {
      getMovies({ search })
    }, 400)
  },[getMovies])
  

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  

  return (
    <>
    <div className='page'>
      <h1>Buscador de Películas</h1>
      <header>
        <form className="form" onSubmit={handleSubmit} >
          <input 
          style={{
            background: 'rgba(0, 0, 0, 0.0)',
            backgroundColor: error ? 'rgba(255, 0, 0, 0.25)' : 'rgba(0, 255, 0, 0.0)', 
            border: '1.5px solid transparent',
            borderColor: error ? 'red' : 'cyan',
            color: error ? '#f00' : '#ddd'
          }}
          onChange={handleChange} 
          value={search} name='search' 
          placeholder='Avengers, Star Wars, The Matrix...' 
          type="text" />
          <input type="checkbox" onChange={handleSort} checked={sort} />

          <button
          style={{
            border: '1.5px solid transparent',
            borderColor: error ? '#999' : 'cyan',
          }}
          type="submit">
            Buscar</button>

        </form>
        {error && <p style={{color: 'red'}} >{error}</p>}
      </header>
      
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
    </>
  )
}

export default App
