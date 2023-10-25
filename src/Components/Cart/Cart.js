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
      <h3 className=""> Total: $ {total}</h3>


      <h3 className=""> Cantidad total: {totalQuantity}</h3>

      <button className="btn btn-primary mb-3 d-block" onClick={() => clearCart()}> Vaciar carrito</button>
      <Link className="btn btn-primary mb-3 d-inline-block btn-lg" to='/checkout'> Finalizar la Compra</Link>

    </div>
  )
}

export default Cart