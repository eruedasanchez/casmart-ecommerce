import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    return (
        <section className="cart section--lg container--cart">
            <div className="table__container">
                <table className="table">
                    <thead>
                        <tr>  
                        {/* className="table__tr--details" */}
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className="table__img" src="https://i.postimg.cc/13RTLRNV/product-02.jpg" alt=""/></td>
                            <td><h3 className="table__title">Women's Faux-Trim Shirt</h3></td>
                            <td><span className="table__price">$110</span></td>
                            <td><span className="quantity__cart">3</span></td>
                            <td><span className="table__subtotal">$220</span></td>
                            <td><button><ion-icon name="trash-outline"></ion-icon></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cart__actions">
                <button className="btn btn-primary flex"><ion-icon name="trash-outline"></ion-icon>Empty Cart</button>
                <Link to='/category/'>
                    <button className="btn btn-primary flex"><ion-icon name="bag-handle-outline"></ion-icon>Continue Shopping</button>
                </Link>
            </div>
            <div className="divider"></div>
            <div className="cart__group grid">
                <div>
                    <div className="cart__shipping">
                        <h3 className="section__title">Calculate Shipping</h3>
                        <form action="" className="form grid">
                            <input type="text" placeholder="State / Country" className="form__input"/>
                            <div className="form__group grid">
                                <input type="text" placeholder="City" className="form__input"/>
                                <input type="number" placeholder="PostCode / ZIP" className="form__input"/>
                            </div>
                            <div>
                                <button className="btn btn-primary flex btn--sm"><ion-icon name="refresh-circle-outline"></ion-icon>Update</button>
                            </div>
                        </form>
                    </div>
                    <div className="cart__coupon">
                        <h3 className="section__title">Apply Coupon</h3>
                        <form action="" className="coupon__form form grid">
                            <div className="form__group grid">
                                <input type="text" className="form__input" placeholder="Enter Your Coupon"/>
                                <div className="form__btn">
                                    <button className="btn btn-primary flex btn--sm"><ion-icon name="color-wand-outline"></ion-icon>Apply</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="cart__total">
                    <h3 className="section__title">Cart Totals</h3>
                    <table className="cart__total-table">
                        <thead>
                            <tr>
                                <td><span className="cart__total-title">Cart Subtotal</span></td>
                                <td><span className="cart__total-title">Shipping</span></td>
                                <td><span className="cart__total-title">Total</span></td>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="cart__total-price">$240.00</span></td>
                                <td><span className="cart__total-price">$10.00</span></td>
                                <td><span className="cart__total-price">$250.00</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to='/checkout'>
                        <button className="btn btn-primary flex btn--md"><ion-icon name="bag-check-outline"></ion-icon>Proceed To Checkout</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cart;