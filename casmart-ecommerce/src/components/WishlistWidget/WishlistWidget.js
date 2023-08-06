import './WishlistWidget.css';
import {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const WishlistWidget = () => {
    const {productsInWishlist} = useContext(CartContext);

    return (
        <Link to="/wishlist">
            <button className="header-action-btn">
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                <p className="header-action-label">Wishlist</p>
                <div className="btn-badge" aria-hidden="true">{productsInWishlist()}</div>
            </button>
        </Link>
    );
}

export default WishlistWidget;



