import {useState} from "react";
import './CartWidget.css';

const CartWidget = () => {
    const [counterCart, setCounterCart] = useState(0);

    return (
        <button className="header-action-btn">
            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Carrito</p>
            <div className="btn-badge green" aria-hidden="true">{counterCart}</div>
        </button>
    );
}

export default CartWidget;