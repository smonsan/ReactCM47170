import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getItem } from "../../firebaseConfig/services"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { id } = useParams();



  useEffect(() => {


    //accedemos a nuestra base de datos 

    getItem(id)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() })
      })
      .catch(error => {
        console.error(error)

      })
  }, [id])


  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer