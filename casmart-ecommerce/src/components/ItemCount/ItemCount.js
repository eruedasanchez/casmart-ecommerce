import { useState } from 'react';
import './ItemCount.css';
import minusIcon from './icon-minus.svg';
import plusIcon from './icon-plus.svg';

const ItemCount = ({count, handleDecrement, handleIncrement, handleAddToCart}) => {
    
    return (
        <div className="details__action">
            <div className="input__count">
                <button onClick={handleDecrement}><img className="input__count-minus" src={minusIcon} alt="minus"/></button>
                <p className="input__count-number">{count}</p>
                <button onClick={handleIncrement}><img className="input__count-plus" src={plusIcon} alt="plus"/></button>
            </div>
            {/* <input type="number" className="quantity"/> */}
            <button className="btn--add btn--sm" onClick={handleAddToCart}>Add to Cart</button>
            <a href="#" className="details__action-btn"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
    )
}

export default ItemCount;