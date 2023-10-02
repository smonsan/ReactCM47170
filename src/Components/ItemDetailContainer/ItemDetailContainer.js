import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { getProductById } from "../../mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getItem } from "../../firebaseConfig/services"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { id } = useParams();



  useEffect(() => {


    //accedemos a nuestra base de datos 

//const item = doc(db, "items", "0JAe4TFokuvxeyjfyUmg" )
//  accedemos a la referencia de un documento con doc, variable definida db, coleccion  y el ultimo parametro es el id de un solo producto

getItem(id)
      .then ((snapshot) => {
       setProduct ({id:snapshot.id, ...snapshot.data()})
      })
      .catch(error => {
        console.error(error)

      })
  }, [id])

  






   /*  getProductById(idItem)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error(error)

      })
  }, [idItem])
 */

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer