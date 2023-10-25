import Item from "../Item/Item"

const ItemList = ({ products }) => {



  return (

    <div className='row'>
   
      {products.map((p) => <Item key={p.id} {...p} />)}
  
    </div>

  )
}


export default ItemList