import './Brief.css';

const Brief = ({cart, subtotal, shipping, total}) => {
    return (
        <div className="checkout__group">
            <h3 className="section__title">Detalle del pedido</h3>
                {cart.length > 0 &&
                    <>
                        <table className="order__table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Productos</th>
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
                                    <td><span className="order__subtitle">Envio</span></td>
                                    <td colSpan={2}><span className="table__price">${shipping()}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="order__subtitle">Total</span></td>
                                    <td colSpan={2}><span className="order__grand-total">${total()}</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="payment__methods">
                            <h3 className="checkout__title payment__title">Medios de pago</h3>
                            <div className="payment__option flex__check">
                                <input type="radio" name="radio" defaultChecked className="payment__input"/>
                                <label className="payment__label">Transferencia Bancaria</label>
                            </div>
                            <div className="payment__option flex__check">
                                <input type="radio" name="radio" defaultChecked className="payment__input"/>
                                <label className="payment__label">MercadoPago</label>
                            </div>
                            <div className="payment__option flex__check">
                                <input type="radio" name="radio" defaultChecked className="payment__input"/>
                                <label className="payment__label">Tarjeta de Credito</label>
                            </div>
                        </div>
                    </>
                }
        </div>
    )
}

export default Brief;
