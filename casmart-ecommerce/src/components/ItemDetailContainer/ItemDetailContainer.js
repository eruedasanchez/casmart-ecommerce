import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import NavBar from '../NavBar/NavBar';

const ItemDetailContainer = () => {
    const {name} = useParams();
    return (
        <>        
        <section className="details section--lg">
            <div className="details__container container--detail grid">
                    <div className="details__group">
                        <img src="https://i.postimg.cc/XY2h3MwH/product-01.jpg" alt="" className="details__img"/>
                        <div className="details__small-images grid">
                            <img src="https://i.postimg.cc/mrtngdjb/product-01b.jpg" alt="" className="details__small-img"/>
                            <img src="https://i.postimg.cc/XY2h3MwH/product-01.jpg" alt="" className="details__small-img"/>
                            <img src="https://i.postimg.cc/mrtngdjb/product-01b.jpg" alt="" className="details__small-img"/>
                        </div>
                    </div>
                    <div className="details__group">
                        <h3 className="details__title">{name}</h3>
                        <p className="details__brand">Brands: <span>Gucci</span></p>
                        <div className="details__price flex">
                            <span className="new__price">$116</span>
                            <span className="old__price">$200.00</span>
                            <span className="save__price">25% OFF</span>
                        </div>
                        <p className="short__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint, aliquam blanditiis eveniet ipsum tempora ea, omnis illo deserunt iure culpa corporis officia quia possimus labore nam consequatur sit. Error.</p>
                        <ul className="product__list">
                            <li className="list__item flex"><ion-icon name="sparkles-outline"></ion-icon> 1 Year GUCCI® US Warranty</li>
                            <li className="list__item flex"><ion-icon name="refresh-circle-outline"></ion-icon>30 Day Return Policy</li>
                            <li className="list__item flex"><ion-icon name="card-outline"></ion-icon>Cash on Delivery available</li>
                        </ul>
                        <div className="details__color flex">
                            <span className="details__color-title">Color</span>
                            <ul className="color__list">
                                <li><a href="#" className="color__link" style={{"backgroundColor": "hsl(176, 35%, 63%)"}}></a></li>
                                <li><a href="#" className="color__link" style={{"backgroundColor": "hsl(356, 65%, 63%)"}}></a></li>
                                <li><a href="#" className="color__link" style={{"backgroundColor": "hsl(131, 85%, 23%)"}}></a></li>
                                <li><a href="#" className="color__link" style={{"backgroundColor": "hsl(0, 0%, 0%)"}}></a></li>
                                <li><a href="#" className="color__link" style={{"backgroundColor": "hsl(0, 0%, 44%)"}}></a></li>
                            </ul>
                        </div>
                        <div className="details__size flex">
                            <span className="details__size-title">Size</span>
                            <ul className="size__list">
                                <li><a href="#" className="size__link size-active">S</a></li>
                                <li><a href="#" className="size__link">M</a></li>
                                <li><a href="#" className="size__link">L</a></li>
                                <li><a href="#" className="size__link">XL</a></li>
                            </ul>
                        </div>
                        <div className="details__action">
                            <input type="number" className="quantity"/>
                            <a href="#" className="btn btn-primary btn--sm">Add to Cart</a>
                            <a href="#" className="details__action-btn"><ion-icon name="heart-outline"></ion-icon></a>
                        </div>
                        <ul className="details__meta">
                            <li className="meta__list flex"><span>ID:</span> FWM15VKT</li>
                            <li className="meta__list flex"><span>Tags:</span> Cloth, Women, Sweater</li>
                            <li className="meta__list flex"><span>Availability:</span> 8 Items In Stock</li>
                        </ul>
                    </div>
            </div>
        </section>
        </>
    )
}

export default ItemDetailContainer;