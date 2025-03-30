
import '../style/Header.css'
import { Filters } from './Filters.jsx'

export function Header () {
  return (
    <>
    <header className='header'>
      <h1 className='encabezado'>Tienda React 🛒</h1>
      <div className="filtrosCaja">
      <Filters />
      </div>
      
    </header>
    </>
  )
}