import './NavBar.css';
import {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from './logo-casmart.svg';
import CartWidget from '../CartWidget/CartWidget';
import WishlistWidget from '../WishlistWidget/WishlistWidget';
import HeaderActionIcons from '../HeaderActionIcons/HeaderActionIcons';

function NavBar() {
    
    const [activeNavbar, setActiveNavbar] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const handleActiveNavbar = () => {
        if(window.scrollY >= 80){
            setActiveNavbar(true);
        } else {
            setActiveNavbar(false);
        }
    }

    const handleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
    }

    useEffect(() => {window.addEventListener('scroll', handleActiveNavbar);}, [])
    
    return (
        <header className={activeNavbar ? "header active" : "header"}>  
            <div className="container">
                <div onClick={handleHamburgerMenu} className={hamburgerMenu ? "overlay active" : "overlay"}></div>
                <div className="header-search">
                    <input type="search" name="search" placeholder="Buscar producto..." className="input-field"/>
                    <button className="search-btn" aria-label="Search"><ion-icon name="search-outline"></ion-icon></button>
                </div> 
                <Link to='/' className="logo"><img src={logo} alt="Casmart logo" style={{width:"130", height:"31"}}/></Link>
                <div className="header-actions">
                    <HeaderActionIcons name="person-outline" title="Sign in"/>
                    <HeaderActionIcons name="search-outline" title="Search"/>
                    <CartWidget/>
                    <WishlistWidget/>
                </div>
                <button onClick={handleHamburgerMenu} className="nav-open-btn" aria-label="Open menu">
                        <span></span>
                        <span></span>
                        <span></span>
                </button>
                <nav className={hamburgerMenu ? "navbar active" : "navbar"}>
                        <div className="navbar-top">
                            <Link to='/' className="logo">
                                <img src={logo} alt="Casmart logo" style={{width:"130", height:"31"}}/>
                            </Link>
                            <button onClick={handleHamburgerMenu} className="nav-close-btn" aria-label="Close menu">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                        <ul className="navbar-list">
                            <li><NavLink to='/category/best-seller' className="navbar-link">Best Seller</NavLink></li>
                            <li><NavLink to='/category/hot-collection' className="navbar-link">Hot Collection</NavLink></li>
                            <li><NavLink to='/category/trendy' className="navbar-link">Trendy</NavLink></li>
                            <li><NavLink to='/category/new-arrival' className="navbar-link">New Arrival</NavLink></li>
                        </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;





