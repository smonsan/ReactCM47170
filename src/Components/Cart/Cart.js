import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import  CartItem  from "../CartItem/CartItem"
import { Link } from "react-router-dom"



const Cart = () => {

  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (

      <>
        <h2> Carrito sin Productos </h2>
        <Link to="/"> Ver productos </Link>
      </>
    )
  }

  return (
    <div>
      {cart.map(products => <CartItem key={products.id} {...products} />)}
      <h3> Total: $ {total}</h3>
      <h3> Cantidad total: {totalQuantity}</h3>
      <button onClick={() => clearCart()}> Vaciart carrito</button>
      <Link to="/checkout"> Finalizar la Compra</Link>
    </div>
  )
}

export default Cart