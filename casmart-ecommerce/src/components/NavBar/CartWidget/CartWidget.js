import {useState} from "react";
import './CartWidget.css';

function CartWidget() {
    const [counter, setCounter] = useState(4);

    return (
        <button className="header-action-btn">
            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Cart</p>
            <div className="btn-badge green" aria-hidden="true">{counter}</div>
        </button>
    );
}

export default CartWidget;