import {useContext, useState} from "react";
import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
    const {productsInCart} = useContext(CartContext);

    return (
        <Link to="/cart">
            <button className="header-action-btn">
                <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                <p className="header-action-label">Cart</p>
                <div className="btn-badge green" aria-hidden="true">{productsInCart()}</div>
            </button>
        </Link>
    );
}

export default CartWidget;