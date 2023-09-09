import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"


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
           

        </nav>
    )
}

export default NavBar