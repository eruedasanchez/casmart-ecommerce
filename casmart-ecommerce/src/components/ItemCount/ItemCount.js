import './ItemCount.css';
import minusIcon from './icon-minus.svg';
import plusIcon from './icon-plus.svg';

const ItemCount = ({count, handleDecrement, handleIncrement, handleAddToCart, handleAddToWishlist}) => {
    return (
        <div className="details__action">
            <div className="input__count">
                <button onClick={handleDecrement}><img className="input__count-minus" src={minusIcon} alt="minus"/></button>
                <p className="input__count-number">{count}</p>
                <button onClick={handleIncrement}><img className="input__count-plus" src={plusIcon} alt="plus"/></button>
            </div>
            <button className="btn--add btn-primary btn--sm" onClick={handleAddToCart}>Agregar al Carrrito</button>
            <button className="details__action-btn" onClick={handleAddToWishlist}><ion-icon name="heart-outline"></ion-icon></button>
        </div>
    )
}

export default ItemCount;
