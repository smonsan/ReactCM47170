import CartWidget from "./CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const NavBar = () => {

    return (
    <nav>
        <h3> Servicio Automotriz</h3>
        <div>
            <button> Servicios</button>
            <button> Quienes Somos</button>
            
        </div>
        <CartWidget/>
       <ItemListContainer greeting={'BIENVENIDOS'}/>

    </nav>
    )
}

export default NavBar