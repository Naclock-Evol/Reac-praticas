import { useCart } from '../hook/useCart'
import '../style/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from "react"

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div className='cartTitle'>
        <strong>{title}</strong>
      </div>
      <div className='cartPrice'>
        <strong>$ {price}</strong>
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart} >+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <div className='contenedorCart'>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} />

      <aside className='cart'>
        <ul className='cartGroup'>
          {
            cart.map(product => (
              <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
              />
            ))
          }
        </ul>

        <button className='cartLimpiar' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}