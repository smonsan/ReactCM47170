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
        </section>
        <footer className="ItemFooter">
            <button className="BotonVerMas"> Ver mas Detalles </button>

        </footer>
    </article>
  
  )
}

export default Item
