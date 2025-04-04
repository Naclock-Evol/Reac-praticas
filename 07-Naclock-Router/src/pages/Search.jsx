import { useEffect } from "react"

export default function SearchPage ({ routeParams }) {

  useEffect(() => {
    document.title = `${routeParams.query}`
  },[routeParams.query])

  return (
    <>
      <h1>Has Buscado {routeParams.query}</h1>
    </>
    
  )
}