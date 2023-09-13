import { Link } from "react-router-dom"

const Item = ({ id, title, price, image, stock }) => {

    return (
        
        <div class=" card container row row-cols-1 row-cols-md-2 g-4 w-25 p-3 m-2"> 
            <div class= " body col" >
                <div class="">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>

            <picture>
                <img src={image} alt={title} class="img-fluid" />
            </picture>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>

            <footer className="ItemFooter">

                <Link to={`/item/${id}`}  class= "btn btn-primary" > Ver Detalles </Link>

            </footer>
                </div>
            </div>
        </div>
    )      
}

export default Item
