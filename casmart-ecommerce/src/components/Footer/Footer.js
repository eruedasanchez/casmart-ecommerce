import "./Footer.css";
import logo from './logo-casmart.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" class="logo"><img src={logo} alt="Casmart logo"/></a>
                        <p className="footer-text">Casmart is a fashion theme for presents a complete wardrobe of uniquely crafted Ethnic Wear, Casuals, Edgy Denims, & Accessories inspired from the most contemporary</p>
                        <ul className="social-list">
                            <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                            <li><a href="#" className="social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
                        </ul>
                    </div>
                    <ul className="footer-list">
                        <li><p class="footer-list-title">Information</p></li>
                        <li><a href="#" className="footer-link">About Company</a></li>
                        <li><a href="#" className="footer-link">Payment Type</a></li>
                        <li><a href="#" className="footer-link">Awards Winning</a></li>
                        <li><a href="#" className="footer-link">World Media Partner</a></li>
                        <li><a href="#" className="footer-link">Become an Agent</a></li>
                        <li><a href="#" className="footer-link">Refund Policy</a></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p class="footer-list-title">Category</p></li>
                        <li><a href="#" className="footer-link">Handbags & Wallets</a></li>
                        <li><a href="#" className="footer-link">Women's Clothing</a></li>
                        <li><a href="#" className="footer-link">Plus Sizes</a></li>
                        <li><a href="#" className="footer-link">Complete Your Look</a></li>
                        <li><a href="#" className="footer-link">Baby Corner</a></li>
                        <li><a href="#" className="footer-link">Man & Woman Shoe</a></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p class="footer-list-title">Help & Support</p></li>
                        <li><a href="#" className="footer-link">Dealers & Agents</a></li>
                        <li><a href="#" className="footer-link">FAQ Information</a></li>
                        <li><a href="#" className="footer-link">Return Policy</a></li>
                        <li><a href="#" className="footer-link">Shipping & Delivery</a></li>
                        <li><a href="#" className="footer-link">Order Tranking</a></li>
                        <li><a href="#" className="footer-link">List of Shops</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">&copy; 2023 <a href="#">e-ruedasanchez</a>. All Rights Reserved</p>
                    <ul className="footer-bottom-list">
                        <li><a href="#" clasNames="footer-bottom-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-bottom-link">Terms & Conditions</a></li>
                        <li><a href="#" className="footer-bottom-link">Sitemap</a></li>
                    </ul>
                    <div className="payment">
                        <p className="payment-title">We Support</p>
                        <img src="https://i.postimg.cc/yNwkjxkZ/payment-img.png" alt="Online payment logos" class="payment-img"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;