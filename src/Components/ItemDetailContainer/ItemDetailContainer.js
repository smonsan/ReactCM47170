import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../mock"
import ItemDetail from "../ItemDetail/ItemDetail"

import {getFirestore, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { idItem } = useParams();



  useEffect(() => {

/* const db = getFirestore()

const item = doc(db, "items", "0JAe4TFokuvxeyjfyUmg" )

getDoc(item)
      .then(snapshot => {
       setProduct ({id: snapshot.id, ...snapshot.data()})
      })
      .catch(error => {
        console.error(error)

      })
  }, [idItem])
 */





    getProductById(idItem)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error(error)

      })
  }, [idItem])


  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer