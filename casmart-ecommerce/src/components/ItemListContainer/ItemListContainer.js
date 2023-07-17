import background from './hero-banner.jpg';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (greeting) => {
    const {title} = useParams();

    return (
        <>
        <div className="hero" id="home" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">{greeting.title}</p>
                    <h2 className="h1 hero-title">{greeting.subtitle}</h2>
                    <button className="btn btn-primary">{greeting.button}</button>
                </div>
            </div>
        </div>
        <section className="section product">
                <div className="container">
                    <h2 className="h2 section-title">Products of the week</h2>
                    <ul className="filter-list">
                        <li><Link to='/category/:title' className="filter-btn active">Best Seller</Link></li>
                        <li><Link to='/category/:title' className="filter-btn">Hot Collection</Link></li>
                        <li><Link to='/category/:title' className="filter-btn">Trendy</Link></li>
                        <li><Link to='/category/:title' className="filter-btn">New Arrival</Link></li>
                    </ul>
                    <ItemList/>
                    <button className="btn btn-outline">View All Products</button>
                </div>
        </section>    
        </>
    );
}

export default ItemListContainer;


