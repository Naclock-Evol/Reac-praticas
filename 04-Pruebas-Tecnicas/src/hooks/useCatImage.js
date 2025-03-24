import { useEffect, useState } from 'react'

export function useCatImg ({ fact }) {
  const [imag, setImag] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImag(url)
      })
  }, [fact])
  return { imag }
}
