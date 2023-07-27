import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({id, name, img, price}) => {

    const handleAdd = () => {
        console.log(id);
    }
    
    return(
        <li>
            <div className="product-card">
                <figure className="card-banner">
                    <Link to={`/item/${id}`}>
                        <img src={img} alt={name} loading="lazy" style={{"width": "800", "height": "1034"}} className="w-100"/>
                    </Link>
                    <div className="card-actions">
                        <Link to={`/item/${id}`} className="card-action-btn">
                            <ion-icon name="eye-outline"></ion-icon>
                        </Link>
                        {/* <Link> */}
                        <button onClick={handleAdd} className="card-action-btn cart-btn">
                            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                            <p>Add to cart</p>
                        </button>
                        {/* </Link> */}
                        <Link to={`/item/${id}`} className="card-action-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                        </Link>
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

