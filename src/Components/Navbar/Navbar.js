import { Link, NavLink } from "react-router-dom"
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {

    return (
        <header>

            <Link to="/">
                <h1> Mi Tienda</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"  type="button" class="btn btn-primary"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/electronics"  >Electronicos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/jewelry">Joyas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/men_clothing">Outfit Masculino</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/women_clothing"> Outfit Femenino </NavLink>
                    </li>
                </ul>

                <CartWidget />
            </nav>

        </header>
    )
}

export default NavBar