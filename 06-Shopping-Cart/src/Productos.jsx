import './style/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './components/Icons'
import { useCart } from './hook/useCart'



export function Productos({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <>
      <main className='productos'>
        <ul className='grupo'>
          {
            products.map(product => {
              const isProductInCart = checkProductInCart(product)

              return (
                <li key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className='titulo' >
                    <strong>{product.title}</strong>
                  </div>
                  <div className='precio'>
                    <strong>${product.price}</strong>
                  </div>
                  <div>
                    <button
                    style={{
                      background: isProductInCart ? '#ff000081' : '#0088ff82',
                      border: isProductInCart ?  '0.8px solid red' : '0.8px solid #06f'
                    }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                    >

                      {
                        isProductInCart
                          ? <RemoveFromCartIcon />
                          : <AddToCartIcon />
                      }

                    </button>
                  </div>
                </li>
              )
            }
            )
          }
        </ul>
      </main>
    </>
  )
}
