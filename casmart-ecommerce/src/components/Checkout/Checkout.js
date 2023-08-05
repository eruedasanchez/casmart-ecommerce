import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from "../Form/Form";
import Brief from "../Brief/Brief";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Congrats from "../Congrats/Congrats";

const Checkout = () => {
    const {cart, total, subtotal, shipping, cleanCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const [clientInformation, setClientInformation] = useState({
        name: "",
        surname: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        comment: ""
    });

    const [errors, setErrors] = useState({});

    const validate = (clientInformation) => {
        let isError = false;
        let errors = {};
        let formatText = /^[A-Za-zÑñÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let formatEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{1,15}$/;
        let formatComment = /^.{0,300}$/;
        let formatPhone = /^.{1,12}$/;
        let formatLength = /^.{1,150}$/;

        if(!formatText.test(clientInformation.name)){
            errors.name = 'El campo Nombre solo acepta letras y espacios';
            isError = true;
        } else if(!formatLength.test(clientInformation.name)){
            errors.name = 'El campo Nombre solo acepta hasta 150 caracteres';
            isError = true;
        }

        if(!formatText.test(clientInformation.surname)){
            errors.surname = 'El campo Apellido solo acepta letras y espacios';
            isError = true;
        } else if(!formatLength.test(clientInformation.surname)){
            errors.surname = 'El campo Apellido solo acepta hasta 150 caracteres';
            isError = true;
        }

        if(!formatText.test(clientInformation.city)){
            errors.city = 'El campo Ciudad solo acepta letras y espacios';
            isError = true;
        } else if(!formatLength.test(clientInformation.city)){
            errors.city = 'El campo Ciudad solo acepta hasta 150 caracteres';
            isError = true;
        }
        
        if(!formatText.test(clientInformation.country)){
            errors.country = 'El campo Pais solo acepta letras y espacios';
            isError = true;
        } else if(!formatLength.test(clientInformation.country)){
            errors.country = 'El campo Pais solo acepta hasta 150 caracteres';
            isError = true;
        }

        if(!formatPhone.test(clientInformation.phone)){
            errors.phone = 'Campo Telefono invalido. Sin 0 ni - (Ej: 1123456789).';
            isError = true;
        }
        
        if(!formatEmail.test(clientInformation.email)){
            errors.email = 'Formato de email invalido. Intenta con @gmail.com, @hotmail.com, @live.com.ar o @yahoo.com';
            isError = true;
        }

        if(!formatComment.test(clientInformation.comment)){
            errors.comment = 'Atencion: Su comentario no debe superar los 300 caracteres';
            isError = true;
        }

        return isError ? errors : null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const day = new Date();
        const priceOrder = total();
        const data = {clientInformation, cart, priceOrder, day};

        const err = validate(clientInformation);

        if(err === null){
            generateOrder(data);
        } else {
            setErrors(err);
        }
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
            <Congrats clientInformation={clientInformation} orderId={orderId}/>
        )
    }       
    
    return (
        <>
        <NavBar/>
            {
                cart.length > 0 ?
                    <section className="checkout section--lg container--checkout">
                        <div className="checkout__container grid">
                            <Form clientInformation={clientInformation} errors={errors} handleSubmit={handleSubmit} handleClientInformation={handleClientInformation}/>
                            <Brief cart={cart} subtotal={subtotal} shipping={shipping} total={total}/>
                        </div>
                    </section>
                :
                <>
                <h3 className="section__title-checkout">El carrito esta vacio!</h3>
                <div className="cart__actions padding">
                    <Link to='/category/'>
                        <button className="btn btn-primary flex btn--md"><ion-icon name="bag-handle-outline"></ion-icon>Continuar comprando</button>
                    </Link>
                </div>
                </>
            }
        <Footer/>
        </>
    )
}

export default Checkout;