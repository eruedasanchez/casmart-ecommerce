import { useContext } from 'react';
import './Item.css';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const Item = ({product}) => {

    const {cart, setCart, count} = useContext(CartContext);

    const addProductFromCart = (product) => {
        const itemAdded = {...product, count};
        const newCart = [...cart];
        const wasAddedProduct = newCart.find((prod) => prod.id === itemAdded.id);
        
        if(wasAddedProduct){
            wasAddedProduct.count += count;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart);
    } 
    
    return(
        <li>
            <div className="product-card">
                <figure className="card-banner">
                    <Link to={`/item/${product.id}`}>
                        <img src={product.img} alt={product.name} loading="lazy" style={{"width": "800", "height": "1034"}} className="w-100"/>
                    </Link>
                    <div className="card-actions">
                        <Link to={`/item/${product.id}`} className="card-action-btn">
                            <ion-icon name="eye-outline"></ion-icon>
                        </Link>
                        {/* <Link> */}
                        <button onClick={() => {addProductFromCart(product)}} className="card-action-btn cart-btn">
                            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                            <p>Add to cart</p>
                        </button>
                        {/* </Link> */}
                        <Link to={`/item/${product.id}`} className="card-action-btn">
                            <ion-icon name="heart-outline"></ion-icon>
                        </Link>
                    </div>
                </figure>
                <div className="card-content">
                    <h3 className="h4 card-title">{product.name}</h3>
                    <div className="card-price">
                        <data value={product.price}>$ {product.price}</data>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Item;

