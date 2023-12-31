import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {

    return (
        <header className="row align-items-center">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/">
                        <h1> Mi Tienda</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" type="button" className="btn btn-primary m-3"> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/electronics" type="button" className="btn btn-primary m-3" >Electronicos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/jewelry" type="button" className="btn btn-primary m-3">Joyas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/men_clothing" type="button" className="btn btn-primary m-3">Outfit Masculino</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/women_clothing" type="button" className="btn btn-primary m-3"> Outfit Femenino </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>

        </header>
    )
}

export default NavBar