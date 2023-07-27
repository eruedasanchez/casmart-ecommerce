import { Link } from "react-router-dom";
import "./Footer.css";
import logo from './logo-casmart.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <Link to={'/'} className="logo"><img src={logo} alt="Casmart logo"/></Link>
                        <p className="footer-text">Casmart is a fashion theme for presents a complete wardrobe of uniquely crafted Ethnic Wear, Casuals, Edgy Denims, & Accessories inspired from the most contemporary</p>
                        <ul className="social-list">
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-facebook"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-twitter"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-instagram"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-pinterest"></ion-icon></Link></li>
                        </ul>
                    </div>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Information</p></li>
                        <li><Link to={'/'} className="footer-link">About Company</Link></li>
                        <li><Link to={'/'} className="footer-link">Payment Type</Link></li>
                        <li><Link to={'/'} className="footer-link">Awards Winning</Link></li>
                        <li><Link to={'/'} className="footer-link">World Media Partner</Link></li>
                        <li><Link to={'/'} className="footer-link">Become an Agent</Link></li>
                        <li><Link to={'/'} className="footer-link">Refund Policy</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Category</p></li>
                        <li><Link to='/category/best-seller' className="footer-link">Best Seller</Link></li>
                        <li><Link to='/category/hot-collection' className="footer-link">Hot Collection</Link></li>
                        <li><Link to='/category/trendy' className="footer-link">Trendy</Link></li>
                        <li><Link to='/category/new-arrival' className="footer-link">New Arrival</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Help & Support</p></li>
                        <li><Link to={'/'} className="footer-link">Dealers & Agents</Link></li>
                        <li><Link to={'/'} className="footer-link">FAQ Information</Link></li>
                        <li><Link to={'/'} className="footer-link">Return Policy</Link></li>
                        <li><Link to={'/'} className="footer-link">Shipping & Delivery</Link></li>
                        <li><Link to={'/'} className="footer-link">Order Tranking</Link></li>
                        <li><Link to={'/'} className="footer-link">List of Shops</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">&copy; 2023 <Link to={'/'}>e-ruedasanchez</Link>. All Rights Reserved</p>
                    <ul className="footer-bottom-list">
                        <li><Link to={'/'} className="footer-bottom-link">Privacy Policy</Link></li>
                        <li><Link to={'/'} className="footer-bottom-link">Terms & Conditions</Link></li>
                        <li><Link to={'/'} className="footer-bottom-link">Sitemap</Link></li>
                    </ul>
                    <div className="payment">
                        <p className="payment-title">We Support</p>
                        <img src="https://i.postimg.cc/yNwkjxkZ/payment-img.png" alt="Online payment logos" className="payment-img"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;