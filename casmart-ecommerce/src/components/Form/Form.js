import { useState } from "react";
import "./Form.css";

const Form = () => {

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
        console.log("Enviado", clientInformation)
    }

    const handleClientInformation = (e) => {
        setClientInformation({...clientInformation, [e.target.name]:e.target.value});

    }

    return (
        <div className="checkout__group">
            <h3 className="section__title">Billing Details</h3>
            <form action="" className="form grid" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={clientInformation.name} onChange={handleClientInformation} name="name" required className="form__input"/>
                <input type="text" placeholder="Surname" value={clientInformation.surname} onChange={handleClientInformation} name="surname" required className="form__input"/>
                <input type="text" placeholder="City" value={clientInformation.city} onChange={handleClientInformation} name="city" required className="form__input"/>
                <input type="text" placeholder="Country" value={clientInformation.country} onChange={handleClientInformation} name="country" required className="form__input"/>
                <input type="text" placeholder="Postcode" value={clientInformation.postcode} onChange={handleClientInformation} name="postcode" required className="form__input"/>
                <input type="email" placeholder="Email" value={clientInformation.email} onChange={handleClientInformation} name="email" required className="form__input"/>
                <h3 className="checkout__title">Additional Information</h3>
                <textarea name="" placeholder="Order note" id="" cols="30" rows="10" className="form__input textarea"></textarea>
                <button type="submit" className="btn--add btn--md">Place Order</button>
            </form>
        </div>
    )
}

export default Form;


// const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();  // preventDefault() evita que se haga ? al clickear submit
    //     console.log("Enviado", {nombre, email});
    // }   

    // const handleNombre = (e) => {
    //     setNombre(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }