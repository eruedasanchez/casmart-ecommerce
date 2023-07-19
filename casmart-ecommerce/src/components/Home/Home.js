import './Home.css';
import {Link} from 'react-router-dom';
import Banner from '../Banner/Banner';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export const Home = () => {
    return(
        <>
        <Banner title="We are on sale" subtitle="High Moda Fashion House" button="Shop now!"/>
        <section className="section product">
                <div className="container">
                    <h2 className="h2 section-title">Products of the week</h2>
                    <ul className="filter-list">
                        <li><Link to='/category/best-seller' className="filter-btn active">Best Seller</Link></li>
                        <li><Link to='/category/hot-collection' className="filter-btn">Hot Collection</Link></li>
                        <li><Link to='/category/trendy' className="filter-btn">Trendy</Link></li>
                        <li><Link to='/category/new-arrival' className="filter-btn">New Arrival</Link></li>
                    </ul>
                    <ItemListContainer/>
                </div>
        </section>
        </>
    )
}

export default Home;