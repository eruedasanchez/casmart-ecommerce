import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Checkout.css";
// import { generatePath } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const {cart, total, subtotal, shipping, cleanCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const [clientInformation, setClientInformation] = useState({
        name: "",
        surname: "",
        city: "",
        country: "",
        postcode: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const day = new Date();
        const priceOrder = total();
        const data = {clientInformation, cart, priceOrder, day};
        generateOrder(data);
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'orders');
        const order = await addDoc(queryCollection, data);
        setOrderId(order.id);
        cleanCart();
    }

    const handleClientInformation = (e) => {
        setClientInformation({...clientInformation, [e.target.name]:e.target.value});

    }

    if(orderId){
        return(
            <div>
                <h1>Graciaas por tu compra</h1>
                <p>Tu numero de ID es {orderId}</p>
            </div>
        )
    }

    return (
        <section className="checkout section--lg container--checkout">
            <div className="checkout__container grid">
                <div className="checkout__group">
                    <h3 className="section__title">Billing Details</h3>
                    <form action="" className="form grid" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" value={clientInformation.name} onChange={handleClientInformation} name="name" required className="form__input"/>
                        <input type="text" placeholder="Surname" value={clientInformation.surname} onChange={handleClientInformation} name="surname" required className="form__input"/>
                        <input type="text" placeholder="City" value={clientInformation.city} onChange={handleClientInformation} name="city" required className="form__input"/>
                        <input type="text" placeholder="Country" value={clientInformation.country} onChange={handleClientInformation} name="country" required className="form__input"/>
                        <input type="number" placeholder="Phone" value={clientInformation.postcode} onChange={handleClientInformation} name="postcode" required className="form__input"/>
                        <input type="email" placeholder="Email" value={clientInformation.email} onChange={handleClientInformation} name="email" required className="form__input"/>
                        <h3 className="checkout__title">Additional Information</h3>
                        <textarea name="" placeholder="Order note" id="" cols="30" rows="10" className="form__input textarea"></textarea>
                        <button type="submit" className="btn--add btn--md">Place Order</button>
                    </form>
                </div>
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