import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ id, title, image, description, price, stock }) => {
    return (
        
        <div className="card ">
        <img src={image} className="card-img-top" alt="title" />
        <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text"> Precio: {price} </p>
            <p> Descripción: {description}</p>
            <p> Stock Disponible: {stock}</p>
            <div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
            </div>
        </div>
    </div>
        
        

    )
}

export default ItemDetail