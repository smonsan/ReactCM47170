import './Navbar.css';
import CartWidget from "./CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const NavBar = () => {

    return (
        <nav>
            <h3> Servicio Automotriz</h3>

            <ul>
                <li>
                    <a href="#"> Home</a>
                </li>
                <li>
                    <a href="#"> Servicios</a>
                </li>
                <li>
                    <a href="#"> Tips de Mantenimiento </a>
                </li>

            </ul>

            <CartWidget />
            <ItemListContainer greeting={'BIENVENIDOS'} />

        </nav>
    )
}

export default NavBar