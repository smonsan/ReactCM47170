import { Link } from "react-router-dom"

const Item =({id, title, price, image,stock}) => {

  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {title}
            </h2>
        </header>
        <picture>
            <img src={image}   alt={title} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
               Stock Disponible: {stock} 
            </p>
            <p className="Info">

                Id del Producto : {id}
            
                
            </p>
        </section>
        <footer className="ItemFooter">
 
          <Link to= {`/item/${id}`} > Ver Detalles </Link>

        </footer>
    </article>
  
  )
}

export default Item
