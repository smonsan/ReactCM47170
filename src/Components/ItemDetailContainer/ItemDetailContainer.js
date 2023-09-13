import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../mock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const {idItem} = useParams ();

  useEffect (() => {
    getProductById (idItem)
        .then(response => {
            setProduct (response)
        })
        .catch( error => {
            console.error(error)
      
        })
  }, [idItem])


  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product}/>
       </div>
  )
}

export default ItemDetailContainer