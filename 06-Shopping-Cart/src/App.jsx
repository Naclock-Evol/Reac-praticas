
import './style/App.css'
import { Header } from './components/Header'
import { useState } from 'react'
import { Productos } from './Productos'
import { products as initialProducts } from './mocks/products.json'
import { Footer } from './components/Footer'
import { useFilters } from './hook/useFilter'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <div className="cabecera">
        <Header />
      </div>

      <div className="carrito">
        <Cart />
      </div>

      <div className="cuerpo">
        <Productos products={filteredProducts} />
      </div>

      <Footer />
    </CartProvider>

  )
}

export default App
