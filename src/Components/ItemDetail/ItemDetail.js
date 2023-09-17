import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, title, image, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (

        <div className="card">
            <img src={image} className="card-img-top w-25" alt="title" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> Precio: {price} </p>
                <p> Descripción: {description}</p>
                <p> Stock Disponible: {stock}</p>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to="/CartWidget" className="Option" > Terminar Compra  </Link>

                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }

                </footer>
            </div>
        </div>



    )
}

export default ItemDetail