import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import './navbar.css';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation(); 
    const categoriesTitle = ["QA", "Metales", "Ind", "Prod", "IT", "Proc", "Prueb", "Compras", "D-trash", "Mat", "Plann", "Mtto", "RH", "Mfg"];
    const categories = categoriesTitle.map(category => category.toLowerCase());

    const toggleBurgerMenu = () => {
        setIsActive(!isActive);
    };

    const closeBurgerMenu = () => {
        setIsActive(false);
    };

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <button
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isActive ? "true" : "false"}
                    onClick={toggleBurgerMenu}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    {categories.map((category, index) => (
                        <Link
                            to={`/category/${category}`}
                            className={`navbar-item ${location.pathname === `/category/${category}` ? 'is-active' : ''}`}
                            key={category}
                            onClick={closeBurgerMenu}
                        >
                            {categoriesTitle[index]}
                        </Link>
                    ))}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/" className="navbar-item" onClick={closeBurgerMenu}>
                            <img src={logo} alt="Logo" width="112" height="28" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
