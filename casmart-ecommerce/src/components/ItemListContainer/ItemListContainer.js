import background from './hero-banner.jpg';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (greeting) => {
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
                        <li><button className="filter-btn active">Best Seller</button></li>
                        <li><button className="filter-btn">Hot Collection</button></li>
                        <li><button className="filter-btn">Trendy</button></li>
                        <li><button className="filter-btn">New Arrival</button></li>
                    </ul>
                    <ItemList/>
                    <button className="btn btn-outline">View All Products</button>
                </div>
        </section>    
        </>
    );
}

export default ItemListContainer;


