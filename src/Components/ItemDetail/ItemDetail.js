import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, title, image, category, description, price, stock}) => {
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
            Descripción: {description}

        </p>
        <p className="Info">
            Precio: ${price}
        </p>
        <p className="Info">
           Stock Disponible: {stock} 
        </p>
    </section>
    <footer className="ItemFooter">
    <ItemCount initial={2} stock={stock}  onAdd={(quantity) => console.log ('cantidad agregada', quantity)}/>
    </footer>
</article>
  )
}

export default ItemDetail