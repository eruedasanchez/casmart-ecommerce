import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({name, img, price}) => {
    return(
        <li>
            <div className="product-card">
                <figure className="card-banner">
                    <Link to='/item/:name'>
                        <img src={img} alt={name} loading="lazy" style={{"width": "800", "height": "1034"}} className="w-100"/>
                    </Link>
                    <div className="card-actions">
                        <Link to='/item/:name' className="card-action-btn">
                            <ion-icon name="eye-outline"></ion-icon>
                        </Link>
                        <button className="card-action-btn cart-btn">
                            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                            <p>Add to cart</p>
                        </button>
                        <button className="card-action-btn" aria-label="Add to Whishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>
                    </div>
                </figure>
                <div className="card-content">
                    <h3 className="h4 card-title">{name}</h3>
                    <div className="card-price">
                        <data value={price}>$ {price}</data>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Item;


// corregir rutal al detalle del producto (sacar la etiqueta a)
// 