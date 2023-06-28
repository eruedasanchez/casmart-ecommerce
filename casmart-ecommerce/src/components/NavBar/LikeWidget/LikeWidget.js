import {useState} from "react";
import './LikeWidget.css';

function LikeWidget() {
    const [counterLikes, setCounterLikes] = useState(10);

    return (
        <button className="header-action-btn">
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            <p className="header-action-label">Wishlist</p>
            <div className="btn-badge" aria-hidden="true">{counterLikes}</div>
        </button>
    );
}

export default LikeWidget;