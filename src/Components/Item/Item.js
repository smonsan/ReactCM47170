import { Link } from "react-router-dom"

const Item = ({ id, title, price, image, stock }) => {

    return (

        <div className="card m-3 flex">
            <img src={image} className="card-img-top img-fluid "  alt="title" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> Precio: {price} </p>
                <Link to={`/item/${id}`} className="btn btn-primary" > Ver Detalles </Link>
            </div>
        </div>
    )      
}

export default Item
