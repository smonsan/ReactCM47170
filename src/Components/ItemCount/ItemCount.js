import { useState } from "react";

import React from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [quantity, setQuantity] = useState (initial) 


    const increment = () => {

        if (quantity < stock) {
            setQuantity (quantity +1)
        }
    }

    const decrement = ()  => {

        if (quantity < stock) {
            setQuantity (quantity -1)
        }
    }


  return (
    <div className="Counter">
        <div className= "Controls">
            <button className='Boton'   onClick={decrement}  disabled = {quantity<=0}> - </button>
            <h4 className="Numero"> {quantity} </h4>
            <button className='Boton' onClick={increment}> + </button>

        </div>
        <button className="Boton" onClick={() =>  onAdd (quantity)}  disabled = {!stock}>
            Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount