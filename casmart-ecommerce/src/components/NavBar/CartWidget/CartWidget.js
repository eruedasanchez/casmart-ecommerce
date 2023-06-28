import './CartWidget.css';

function CartWidget() {
    return (
        <button className="header-action-btn">
            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Cart</p>
            <div className="btn-badge green" aria-hidden="true">3</div>
        </button>
    );
}

export default CartWidget;