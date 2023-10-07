import cart from './assets/cart_image.svg'
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)


  return (

    <div>
      <Link to="/cart">
        <img className="Cart_image" src={cart} alt="imagen carrito"></img>

        {
          totalQuantity > 0 && <strong> {totalQuantity}</strong>
        }
      </Link>
    </div>
  )
}


export default CartWidget