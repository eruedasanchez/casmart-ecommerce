import "./Checkout.css";

const Checkout = () => {
    return (
        <section className="checkout section--lg container--checkout">
            <div className="checkout__container grid">
                <div className="checkout__group">
                    <h3 className="section__title">Billing Details</h3>
                    <form action="" className="form grid">
                        <input type="text" placeholder="Name" className="form__input"/>
                        <input type="text" placeholder="Address" className="form__input"/>
                        <input type="text" placeholder="City" className="form__input"/>
                        <input type="text" placeholder="Country" className="form__input"/>
                        <input type="text" placeholder="Postcode" className="form__input"/>
                        <input type="email" placeholder="Email" className="form__input"/>
                        <h3 className="checkout__title">Additional Information</h3>
                        <textarea name="" placeholder="Order note" id="" cols="30" rows="10" className="form__input textarea"></textarea>
                    </form>
                </div>
                <div className="checkout__group">
                    <h3 className="section__title">Cart Totals</h3>
                    {/* <div className="table__container"> */}
                        <table className="order__table">
                        <thead>
                            <tr>
                                <th colSpan={2}>Products</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img className="order__img" src="https://i.postimg.cc/GtJ756Lj/product-04.jpg" alt=""/></td>
                                <td>
                                    <h3 className="table__title">Yidarton Women Summer Blue</h3>
                                    <p className="table__quantity">x 2</p>
                                </td>
                                <td><span className="table__price">$180.00</span></td>
                            </tr>
                            <tr>
                                <td><img className="order__img" src="https://i.postimg.cc/jdc3QVkx/product-05.jpg" alt=""/></td>
                                <td>
                                    <h3 className="table__title">LDB MOON Women Summer</h3>
                                    <p className="table__quantity">x 1</p>
                                </td>
                                <td><span className="table__price">$65.00</span></td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Subtotal</span></td>
                                <td colSpan={2}><span className="table__price">$280.00</span></td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Shipping</span></td>
                                <td colSpan={2}><span className="table__price">Free Shipping</span></td>
                            </tr>
                            <tr>
                                <td><span className="order__subtitle">Total</span></td>
                                <td colSpan={2}><span className="order__grand-total">$280.00</span></td>
                            </tr>
                        </tbody>
                        </table>
                    {/* </div> */}
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
                    <button className="btn--add btn--md">Place Order</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout;