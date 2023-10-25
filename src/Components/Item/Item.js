import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ id, title, price, image }) => {

    return (

        <div className="col-4 text-align-center contenedorCard">
            <img src={image} className="card-img" alt="title" />
            <div className="card-body">
                <h5 className="cardtitle"> {title} </h5>
                <p className="card-text"> Precio: {price} </p>
                <Link to={`/item/${id}`} className="btn btn-primary" > Ver Detalles </Link>
            </div>
        </div>

    )
}

export default Item
