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
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to= "/Electronic">Electronic</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/Jewelery">Jewelery</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/MensClothing">Mens Clothing</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/WomensClothing"> WomensClothing </NavLink>
                    </li>
                </ul>

                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar