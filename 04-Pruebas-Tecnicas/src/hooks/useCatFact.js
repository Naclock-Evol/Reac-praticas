import { useEffect, useState } from 'react'
import { GetRandomFact } from '../service/Facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    GetRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
