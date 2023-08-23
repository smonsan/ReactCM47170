import cart from './assets/cart_image.svg'
import './CartWidget.css';

const CartWidget = () => {

    return (

    <div>
      <img className="Cart_image" src= {cart}  alt= "imagen carrito"></img>
      0
    </div>
    )
}

export default CartWidget