import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByIdCat } from "../../mock"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductsByIdCat : getProducts;

        funcion(idCategoria)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [idCategoria])


    return (
        <div className="text-center container flex">
            <h1> {greeting} </h1>
                    <ItemList products={products} />
        </div>
        
    )
}

export default ItemListContainer