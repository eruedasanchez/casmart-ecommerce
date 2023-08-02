import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./Checkout.css";
import Form from "../Form/Form";

const Checkout = () => {
    const {cart, subtotal, shipping, total} = useContext(CartContext);

    return (
        <section className="checkout section--lg container--checkout">
            <div className="checkout__container grid">
                <Form/>
                <div className="checkout__group">
                    <h3 className="section__title">Cart Totals</h3>
                    {cart.length > 0 &&
                        <>
                        <table className="order__table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Products</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((prod) => (
                                        <tr key={prod.id}>
                                            <td><img className="order__img" src={prod.img} alt={prod.name}/></td>
                                            <td>
                                                <h3 className="table__title">{prod.name}</h3>
                                                <p className="table__quantity">x {prod.count}</p>
                                            </td>
                                            <td><span className="table__price">${prod.price * prod.count}</span></td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td><span className="order__subtitle">Subtotal</span></td>
                                    <td colSpan={2}><span className="table__price">${subtotal()}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="order__subtitle">Shipping</span></td>
                                    <td colSpan={2}><span className="table__price">${shipping()}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="order__subtitle">Total</span></td>
                                    <td colSpan={2}><span className="order__grand-total">${total()}</span></td>
                                </tr>
                            </tbody>
                    </table>
                    <div className="payment__methods">
                        <h3 className="checkout__title payment__title">Payment</h3>
                        <div className="payment__option flex__check">
                            <input type="radio" name="radio" defaultChecked className="payment__input"/>
                            <label htmlFor="" className="payment__label">Direct Bank Transfer</label>
                        </div>
                        <div className="payment__option flex__check">
                            <input type="radio" name="radio" defaultChecked className="payment__input"/>
                            <label htmlFor="" className="payment__label">MercadoPago</label>
                        </div>
                        <div className="payment__option flex__check">
                            <input type="radio" name="radio" defaultChecked className="payment__input"/>
                            <label htmlFor="" className="payment__label">Paypal</label>
                        </div>
                    </div>
                    </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Checkout;