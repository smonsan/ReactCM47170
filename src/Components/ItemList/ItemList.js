import Item from '../Item/Item'

const ItemList = ({ products }) => {



  return (

    <div className="row justify-content-evenly">
   
      {products.map((p) => <Item key={p.id} {...p} />)}
  
    </div>

  )
}


export default ItemList