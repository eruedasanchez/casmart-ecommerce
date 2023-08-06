import {useContext} from "react";
import {CartContext} from "../../context/cartContext";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"


const Wishlist = () => {
    const {wishlist, deleteItemFromWishlist} = useContext(CartContext);

    return (
        <>
            <NavBar/>
            <section className="wishlist section--lg container">
                {wishlist.length > 0 ? 
                    <div className="table__container">
                        <table className="table">
                            <thead>
                                <tr>  
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Estado</th>
                                    <th>Detalle</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            {
                                wishlist.map((prod) => (
                                    <tbody key={prod.id}>
                                        <tr>
                                            <td><img className="table__img" src={prod.img} alt={prod.name}/></td>
                                            <td><h3 className="table__title">{prod.name}</h3></td>
                                            <td><span className="table__price">${prod.price}</span></td>
                                            <td><span className="table__stock">{prod.stock > 0 ? <p>Con stock</p> : <p>Agotado</p>}</span></td>
                                            <td><Link to={`/item/${prod.id}`} className="btn btn-primary">Ver detalles</Link></td>
                                            <td><button onClick={() => {deleteItemFromWishlist(prod.id)}}><ion-icon name="trash-outline"></ion-icon></button></td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div> :
                    <>
                        <h3 className="section__title">Tu Wishlist esta vacia!</h3>
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

export default Wishlist;