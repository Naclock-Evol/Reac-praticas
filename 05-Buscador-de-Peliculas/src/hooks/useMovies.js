
import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

const sortedMovies = useMemo(() => {
  return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
}, [sort, movies])


return { movies: sortedMovies, getMovies, loading }
}