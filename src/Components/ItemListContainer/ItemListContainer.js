import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getItems } from "../../firebaseConfig/services"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {


        getItems(categoryId)
            .then((snapshots) => {
                if (snapshots) {
                    const products = snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setProducts(products);
                } else {
                    console.error("el snapshot no contiene items");

                }
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoryId])


    return (
        <div className="text-center container row flex">
            <h1> {greeting} </h1>
            <ItemList products={products} />
        </div>

    )
}


export default ItemListContainer