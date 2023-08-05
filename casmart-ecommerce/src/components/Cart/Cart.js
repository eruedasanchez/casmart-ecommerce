import {Link} from "react-router-dom";
import "./Cart.css";
import {useContext} from "react";
import {CartContext} from "../../context/cartContext";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Cart = () => {
    const {cart, deleteItem, subtotal, shipping, total, cleanCart} = useContext(CartContext);
    
    const handleEmptyCart = () => {
        cleanCart(); 
    }
    
    return (
        <>
        <NavBar/>
        <section className="cart section--lg container--cart">
            {
                cart.length > 0 ?
                <>
                <div className="table__container">
                <table className="table">
                    <thead>
                        <tr>  
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    {
                        cart.map((prod) => (
                            <tbody key={prod.id}>
                                <tr>
                                    <td><img className="table__img" src={prod.img} alt={prod.name}/></td>
                                    <td><h3 className="table__title">{prod.name}</h3></td>
                                    <td><span className="table__price">${prod.price}</span></td>
                                    <td><span className="quantity__cart">{prod.count}</span></td>
                                    <td><span className="table__subtotal">${prod.price * prod.count}</span></td>
                                    <td><button onClick={() => {deleteItem(prod.id)}}><ion-icon name="trash-outline"></ion-icon></button></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div className="cart__actions">
                <button onClick={handleEmptyCart} className="btn btn-primary flex btn--md"><ion-icon name="trash-outline"></ion-icon>Vaciar Carrito</button>
                <Link to='/category/'>
                    <button className="btn btn-primary flex btn--md"><ion-icon name="bag-handle-outline"></ion-icon>Continuar comprando</button>
                </Link>
            </div>
            <div className="divider"></div>
            <div className="cart__group grid">
                <div>
                    <div className="cart__shipping">
                        <h3 className="section__title">Costo de Envio</h3>
                        <form action="" className="form grid">
                            <input type="text" placeholder="Estado / Pais" className="form__input"/>
                            <div className="form__group grid">
                                <input type="text" placeholder="Ciudad" className="form__input"/>
                                <input type="number" placeholder="Codigo postal" className="form__input"/>
                            </div>
                            <div>
                                <button className="btn btn-primary flex btn--sm"><ion-icon name="refresh-circle-outline"></ion-icon>Calcular</button>
                            </div>
                        </form>
                    </div>
                    <div className="cart__coupon">
                        <h3 className="section__title">Cupon de Descuento</h3>
                        <form action="" className="coupon__form form grid">
                            <div className="form__group grid">
                            <input type="text" className="form__input" placeholder="Ingresa tu cupon"/>
                                <div className="form__btn">
                                    <button className="btn btn-primary flex btn--sm"><ion-icon name="color-wand-outline"></ion-icon>Aplicar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cart__total">
                        <h3 className="section__title">Total Carrito</h3>
                        <table className="cart__total-table">
                            <thead>
                                <tr>
                                    <td><span className="cart__total-title">Subtotal</span></td>
                                    <td><span className="cart__total-title">Envio</span></td>
                                    <td><span className="cart__total-title">Total</span></td>
                                </tr>    
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="cart__total-price">${subtotal()}</span></td>
                                    <td><span className="cart__total-price">${shipping()}</span></td>
                                    <td><span className="cart__total-price">${total()}</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/checkout'>
                            <button className="btn btn-primary flex btn--md"><ion-icon name="bag-check-outline"></ion-icon>Confirmar compra</button>
                        </Link>
                </div>
            </div>
            </> :
            <>
            <h3 className="section__title">El carrito esta vacio!</h3>
            <div className="cart__actions">
                <Link to='/category/'>
                    <button className="btn btn-primary flex btn--md"><ion-icon name="bag-handle-outline"></ion-icon>Continuar comprando</button>
                </Link>
            </div>
            </>
            }
        </section>
        <Footer/>
        </>
    )
}

export default Cart;