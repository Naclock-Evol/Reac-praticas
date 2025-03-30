
import { useId, useState } from 'react'
import '../style/Filters.css'
import { useFilters } from '../hook/useFilter'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <>
      <section className="filtros">
        <div className='rangoPrecio'>
          <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
          <div className='cantidadPrecio'>
            <input
              type="range"
              id={minPriceFilterId}
              min='0'
              max='1000'
              onChange={handleMinPrice}
              value={filters.minPrice}
            /><span>${filters.minPrice}</span>
          </div>
        </div>

        <div className='listaCategoría'>
          <label htmlFor={categoryFilterId}>Categoría</label>
          <select id={categoryFilterId}  onChange={handleCategory} >
            <option value="all">Todas</option>
            <option value="beauty">Maquillaje</option>
            <option value="fragrances">Perfume</option>
            <option value="furniture">Muebles</option>
            <option value="groceries">Alimentos</option>
          </select>
        </div>
      </section>
    </>
  )
}