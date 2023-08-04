import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from "../Form/Form";
import Brief from "../Brief/Brief";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

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
                <h1>Gracias por tu compra</h1>
                <p>Tu numero de ID es {orderId}</p>
            </div> 
        )
    }       
    
    return (
        <>
        <NavBar/>
            {
                cart.length > 0 ?
                    <section className="checkout section--lg container--checkout">
                        <div className="checkout__container grid">
                            <Form clientInformation={clientInformation} handleSubmit={handleSubmit} handleClientInformation={handleClientInformation}/>
                            <Brief cart={cart} subtotal={subtotal} shipping={shipping} total={total}/>
                        </div>
                    </section>
                :
                    <h3 className="section__title">El carrito esta vacio!</h3>
            }
        <Footer/>
        </>
    )
}

export default Checkout;