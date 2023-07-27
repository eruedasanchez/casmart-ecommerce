import { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({item}) => {
    // const {cart, addToCart} = useContext(CartContext);
    const {addToCart} = useContext(CartContext);
    // console.log(cart);

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        count > 1 && setCount(count - 1);
    }

    const handleIncrement = () => {
        count < item.stock && setCount(count + 1);  
    }
    
    return (
        <section className="details section--lg">
            <div className="details__container container--detail grid">
                <div className="details__group">
                        <img src={item.img} alt={item.name} className="details__img"/>
                        <div className="details__small-images grid">
                            <img src={item.secondaryimg} alt="" className="details__small-img"/>
                            <img src={item.img} alt="" className="details__small-img"/>
                            <img src="{item.secondaryimg}" alt="" className="details__small-img"/>
                        </div>
                </div>
                <div className="details__group">
                        <h3 className="details__title">{item.name}</h3>
                        <p className="details__brand">Category: <span>{item.category}</span></p>
                        <div className="details__price flex">
                            <span className="new__price">${item.price}</span>
                            <span className="old__price">${item.oldprice}</span>
                            <span className="save__price">25% OFF</span>
                        </div>
                        <p className="short__description">{item.description}</p>
                        <ul className="product__list">
                            <li className="list__item flex"><ion-icon name="sparkles-outline"></ion-icon> 1 Year GUCCI® US Warranty</li>
                            <li className="list__item flex"><ion-icon name="refresh-circle-outline"></ion-icon>30 Day Return Policy</li>
                            <li className="list__item flex"><ion-icon name="card-outline"></ion-icon>Cash on Delivery available</li>
                        </ul>
                        <div className="details__color flex">
                            <span className="details__color-title">Color</span>
                            <ul className="color__list">
                                <li><Link href="#" className="color__link" style={{backgroundColor: "hsl(176, 35%, 63%)"}}></Link></li>
                                <li><Link href="#" className="color__link" style={{backgroundColor: "hsl(356, 65%, 63%)"}}></Link></li>
                                <li><Link href="#" className="color__link" style={{backgroundColor: "hsl(131, 85%, 23%)"}}></Link></li>
                                <li><Link href="#" className="color__link" style={{backgroundColor: "hsl(0, 0%, 0%)"}}></Link></li>
                                <li><Link href="#" className="color__link" style={{backgroundColor: "hsl(0, 0%, 44%)"}}></Link></li>
                            </ul>
                        </div>
                        <div className="details__size flex">
                            <span className="details__size-title">Size</span>
                            <ul className="size__list">
                                <li><Link href="#" className="size__link size-active">S</Link></li>
                                <li><Link href="#" className="size__link">M</Link></li>
                                <li><Link href="#" className="size__link">L</Link></li>
                                <li><Link href="#" className="size__link">XL</Link></li>
                            </ul>
                        </div>
                        <ItemCount count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleAddToCart={() => {addToCart(item, count)}}/>
                        <ul className="details__meta">
                            <li className="meta__list flex"><span>ID:</span> {item.id}</li>
                            <li className="meta__list flex"><span>Tags:</span> Cloth, Women, Sweater</li>
                            <li className="meta__list flex"><span>Availability:</span> {item.stock} Items In Stock</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;

