import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';
import logo from './logo-casmart.svg';
import CartWidget from '../CartWidget/CartWidget';
import LikeWidget from '../LikeWidget/LikeWidget';
import HeaderActionIcons from '../HeaderActionIcons/HeaderActionIcons';
// import { useState } from 'react';
// import { useEffect } from 'react';

function NavBar() {

    // const [headerActive, setHeaderActive] = useState(true);

    // const handleHeaderActive = () => {
    //     if(window.scrollY < 100){
    //         setHeaderActive(false);
    //     }
    // }
    
    // useEffect(() => {
    //     handleHeaderActive();
    // }, [])
    
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         window.scrollY >= 100 ? header.classNameList.add('active') : header.classNameList.remove('active');
    //     })
    // }, []);

    
    
    return (
            <header className="header">  
        {/* // <header onScroll={handleHeaderActive} className={headerActive ? "header active" : "header"}>  */}
            <div className="container">
                <div className="overlay"></div> 
                <div className="header-search">
                    <input type="search" name="search" placeholder="Search product..." className="input-field"/>
                    <button className="search-btn" aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
                <Link to='/' className="logo">
                    <img src={logo} alt="Casmart logo" style={{width:"130", height:"31"}}/>
                </Link>
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
                <nav className="navbar">
                    <div className="navbar-top">
                        <Link to='/' className="logo">
                            <img src={logo} alt="Casmart logo" style={{width:"130", height:"31"}}/>
                        </Link>
                        <button className="nav-close-btn" aria-label="Close menu">
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





