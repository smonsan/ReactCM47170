import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"



const CartItem = ({item, quantity}) => {
    const {removeItem} =useContext(CartContext);


  return (
    <div> 
        <h4> {item.title} </h4>
        <p> Cantidad: {quantity}</p>
        <p> Precio: {item.price}</p>
        <button onClick={ () => removeItem (item.id)}> Eliminar Producto </button>
        <hr/>
    </div>
  )
}

export default CartItem