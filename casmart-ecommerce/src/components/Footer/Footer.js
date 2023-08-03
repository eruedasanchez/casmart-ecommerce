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
                        <p className="footer-text">Casmart es una marca que presenta un sello de varios años que combina ropa urbana, casual, vanguardista y accesorios de diseño exclusivo inspirados en los estilos más contemporáneos.</p>
                        <ul className="social-list">
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-facebook"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-twitter"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-instagram"></ion-icon></Link></li>
                            <li><Link to={'/'} className="social-link"><ion-icon name="logo-pinterest"></ion-icon></Link></li>
                        </ul>
                    </div>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Informacion</p></li>
                        <li><Link to={'/'} className="footer-link">Acerca de Nosotros</Link></li>
                        <li><Link to={'/'} className="footer-link">Metodos de Pago</Link></li>
                        <li><Link to={'/'} className="footer-link">Premios Obtenidos</Link></li>
                        <li><Link to={'/'} className="footer-link">Nuestros Auspiciantes</Link></li>
                        <li><Link to={'/'} className="footer-link">Embajador Casmart</Link></li>
                        <li><Link to={'/'} className="footer-link">Politicas de Devolucion</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Categorias</p></li>
                        <li><Link to='/category/best-seller' className="footer-link">Best Seller</Link></li>
                        <li><Link to='/category/hot-collection' className="footer-link">Hot Collection</Link></li>
                        <li><Link to='/category/trendy' className="footer-link">Trendy</Link></li>
                        <li><Link to='/category/new-arrival' className="footer-link">New Arrival</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <li><p className="footer-list-title">Ayuda & Soporte</p></li>
                        <li><Link to={'/'} className="footer-link">Proveedores & Embajadores</Link></li>
                        <li><Link to={'/'} className="footer-link">FAQ's</Link></li>
                        <li><Link to={'/'} className="footer-link">Politicas de Devolucion</Link></li>
                        <li><Link to={'/'} className="footer-link">Envios & Delivery</Link></li>
                        <li><Link to={'/'} className="footer-link">Seguimiento de Pedido</Link></li>
                        <li><Link to={'/'} className="footer-link">Sucursales</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">&copy; 2023 <Link to={'/'}>e-ruedasanchez</Link>. All Rights Reserved</p>
                    <ul className="footer-bottom-list">
                        <li><Link to={'/'} className="footer-bottom-link">Privacidad</Link></li>
                        <li><Link to={'/'} className="footer-bottom-link">Terminos & Condiciones</Link></li>
                        <li><Link to={'/'} className="footer-bottom-link">Ubicacion</Link></li>
                    </ul>
                    <div className="payment">
                        <p className="payment-title">Trabajamos con</p>
                        <img src="https://i.postimg.cc/yNwkjxkZ/payment-img.png" alt="Online payment logos" className="payment-img"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;