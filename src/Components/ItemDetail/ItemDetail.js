import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const ItemDetail = ({ id, title, image, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)


        const item = { id, title, price, description, image, stock };

        addItem(item, quantity);
    }

    return (

        <div className="card flex">
            <img src={image} className="card-img-top w-25" alt={title} />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> Precio: {price} </p>
                <p> Descripción: {description}</p>
                <p> Stock Disponible: {stock}</p>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to="/Cart" className="Option" > Terminar Compra  </Link>

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