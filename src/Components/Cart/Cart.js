import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"



const Cart = () => {

  const { cart, clearCart, total, totalQuantity } = useContext(CartContext);
  console.log(cart);

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
      {cart.map((p) => <CartItem key={p.id} item={p} quantity={p.quantity} {...p} />)}
      <h3> Total: $ {total}</h3>
    
    
      <h3> Cantidad total: {totalQuantity}</h3>
    
      <button onClick={() => clearCart()}> Vaciar carrito</button>
      <Link className="btn" to='/checkout'> Finalizar la Compra</Link>
  
    </div>
  )
}

export default Cart