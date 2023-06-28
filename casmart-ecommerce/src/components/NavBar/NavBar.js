import './NavBar.css';
import logo from './logo-casmart.svg';
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="header" data-header>  
            <div className="container">
                <div className="overlay" data-overlay></div> 
                <div className="header-search">
                    <input type="search" name="search" placeholder="Search Product..." class="input-field"/>
                    <button className="search-btn" aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
                <a href="./index.html" className="logo">
                    <img src={logo} alt="Casmart logo" width="130" height="31"/>
                </a>
                <div className="header-actions">
                    <button className="header-action-btn">
                        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                        <p className="header-action-label">Sign in</p>
                    </button>
                    <button className="header-action-btn">
                        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                        <p className="header-action-label">Search</p>
                    </button>
                    <CartWidget/>
                    {/* Inicio componente Cart */}
                    {/* <button className="header-action-btn">
                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                        <p className="header-action-label">Cart</p>
                        <div className="btn-badge green" aria-hidden="true">3</div>
                    </button> */}
                    {/* Fin componente Cart */}
                    <button className="header-action-btn">
                        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                        <p className="header-action-label">Wishlist</p>
                        <div className="btn-badge" aria-hidden="true">2</div>
                    </button>
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
                        <li><a href="#home" className="navbar-link">Best seller</a></li>
                        <li><a href="#home" className="navbar-link">Hot collection</a></li>
                        <li><a href="#home" className="navbar-link">Trendy</a></li>
                        <li><a href="#home" className="navbar-link">New Arrival</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;





