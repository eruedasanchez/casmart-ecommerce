import './NavBar.css';
import logo from './logo-casmart.svg';
import CartWidget from './CartWidget/CartWidget';
import LikeWidget from './LikeWidget/LikeWidget';
import HeaderActionIcons from './HeaderActionIcons/HeaderActionIcons';

function NavBar() {
    return (
        <header className="header" data-header>  
            <div className="container">
                <div className="overlay" data-overlay></div> 
                <div className="header-search">
                    <input type="search" name="search" placeholder="Buscar producto..." class="input-field"/>
                    <button className="search-btn" aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
                <a href="./index.html" className="logo">
                    <img src={logo} alt="Casmart logo" width="130" height="31"/>
                </a>
                <div className="header-actions">
                    <HeaderActionIcons name="person-outline" title="Sign in"/>
                    <HeaderActionIcons name="search-outline" title="Search"/>
                    <CartWidget/>
                    <LikeWidget/>
                </div>
                <button className="nav-open-btn" data-nav-open-btn aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className="navbar" data-navbar>
                    <div class="navbar-top">
                        <a href="#" class="logo">
                            <img src={logo} alt="Casmart logo" width="130" height="31"/>
                        </a>
                        <button className="nav-close-btn" data-nav-close-btn aria-label="Close menu">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>
                    <ul className="navbar-list">
                        <li><a href="#home" className="navbar-link">Mas vendido</a></li>
                        <li><a href="#home" className="navbar-link">Moda</a></li>
                        <li><a href="#home" className="navbar-link">Tendencia</a></li>
                        <li><a href="#home" className="navbar-link">Nueva coleccion</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;





