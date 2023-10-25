import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from "react-router-dom"



const CartWidget = () => {

  //Recuperar el carrito del localStorage
  // const cart = Storage.get('cart')


  const { totalQuantity } = useContext(CartContext)
  // Calcular la cantidad total de elementos en el carrito


  return (

    <div>
      <Link to="/cart">
        <img className="Cart_image" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="imagen carrito" />

        {
          totalQuantity > 0 && <strong> {totalQuantity}</strong>
        }
      </Link>
    </div>
  )
}


export default CartWidget