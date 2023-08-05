import {useContext, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {CartContext} from '../../context/cartContext';

const ItemDetail = ({item}) => {
    const {addToCart, count, setCount} = useContext(CartContext);
    
    const gallery = {firstThumbnail: item.img, secondThumbnail: item.secondaryimg};
    const [activeImg, setActiveImg] = useState(gallery.firstThumbnail);
    
    const [sizeSmall, setSizeSmall] = useState(true);
    const [sizeMedium, setSizeMedium] = useState(false);
    const [sizeLarge, setSizeLarge] = useState(false);
    const [sizeExtraLarge, setSizeExtraLarge] = useState(false);
    
    const handleSizeSmall = () => {
        setSizeSmall(!sizeSmall);
        setSizeMedium(false);
        setSizeLarge(false);
        setSizeExtraLarge(false);
    }

    const handleSizeMedium = () => {
        setSizeSmall(false);
        setSizeMedium(!sizeMedium);
        setSizeLarge(false);
        setSizeExtraLarge(false);
    }

    const handleSizeLarge = () => {
        setSizeSmall(false);
        setSizeMedium(false);
        setSizeLarge(!sizeLarge);
        setSizeExtraLarge(false);
    }

    const handleSizeExtraLarge = () => {
        setSizeSmall(false);
        setSizeMedium(false);
        setSizeLarge(false);
        setSizeExtraLarge(!sizeExtraLarge);
    }
    
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
                    <img src={activeImg} alt={item.name} className="details__img"/>
                    <div className="details__small-images grid">
                        <img onClick={() => setActiveImg(gallery.firstThumbnail)} src={gallery.firstThumbnail} alt={item.name} className="details__small-img"/>
                        <img onClick={() => setActiveImg(gallery.secondThumbnail)} src={gallery.secondThumbnail} alt={item.name} className="details__small-img"/>
                    </div>
                </div>
                <div className="details__group">
                        <h3 className="details__title">{item.name}</h3>
                        <p className="details__brand">Categoria: <span>{item.category}</span></p>
                        <div className="details__price flex">
                            <span className="new__price">${item.price}</span>
                            <span className="old__price">${item.oldprice}</span>
                            <span className="save__price">25% OFF</span>
                        </div>
                        <p className="short__description">{item.description}</p>
                        <ul className="product__list">
                            <li className="list__item flex"><ion-icon name="sparkles-outline"></ion-icon> 1 Año de Garantia GUCCI® US </li>
                            <li className="list__item flex"><ion-icon name="refresh-circle-outline"></ion-icon>30 Dias para Devolucion</li>
                            <li className="list__item flex"><ion-icon name="card-outline"></ion-icon>Pago disponible en Efectivo</li>
                        </ul>
                        <div className="details__color flex">
                            <span className="details__color-title">Color</span>
                            <ul className="color__list">
                                <li><button className="color__link" style={{backgroundColor: "hsl(176, 35%, 63%)"}}></button></li>
                                <li><button className="color__link" style={{backgroundColor: "hsl(356, 65%, 63%)"}}></button></li>
                                <li><button className="color__link" style={{backgroundColor: "hsl(131, 85%, 23%)"}}></button></li>
                                <li><button className="color__link" style={{backgroundColor: "hsl(0, 0%, 0%)"}}></button></li>
                                <li><button className="color__link" style={{backgroundColor: "hsl(0, 0%, 44%)"}}></button></li>
                            </ul>
                        </div>
                        <div className="details__size flex">
                            <span className="details__size-title">Talle</span>
                            <ul className="size__list">
                                <li><button onClick={handleSizeSmall} className={sizeSmall ? "size__link size-active" : "size__link"}>S</button></li>
                                <li><button onClick={handleSizeMedium} className={sizeMedium ? "size__link size-active" : "size__link"}>M</button></li>
                                <li><button onClick={handleSizeLarge} className={sizeLarge ? "size__link size-active" : "size__link"}>L</button></li>
                                <li><button onClick={handleSizeExtraLarge} className={sizeExtraLarge ? "size__link size-active" : "size__link"}>XL</button></li>
                                {/* className={size ? "size__link size-active" : "size__link"} */}
                                {/* className={size ? "size__link size-active" : "size__link"}
                                className={size ? "size__link size-active" : "size__link"} */}
                            </ul>
                        </div>
                        <ItemCount count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleAddToCart={() => {addToCart(item, count)}}/>   
                        <ul className="details__meta">
                            <li className="meta__list flex"><span>ID:</span> {item.id}</li>
                            <li className="meta__list flex"><span>Etiquetas:</span> Ropa, Mujer, Moda</li>
                            <li className="meta__list flex"><span>Disponibilidad:</span> {item.stock} Items en stock</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;

