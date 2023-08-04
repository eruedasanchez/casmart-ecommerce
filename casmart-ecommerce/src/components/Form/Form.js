import './Form.css';

const Form = ({clientInformation, handleSubmit, handleClientInformation}) => {
    return (
        <div className="checkout__group">
            <h3 className="section__title">Detalles de Facturacion</h3>
            <form action="" className="form grid" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={clientInformation.name} onChange={handleClientInformation} name="name" required className="form__input"/>
                <input type="text" placeholder="Apellido" value={clientInformation.surname} onChange={handleClientInformation} name="surname" required className="form__input"/>
                <input type="text" placeholder="Ciudad" value={clientInformation.city} onChange={handleClientInformation} name="city" required className="form__input"/>
                <input type="text" placeholder="Pais" value={clientInformation.country} onChange={handleClientInformation} name="country" required className="form__input"/>
                <input type="number" placeholder="Telefono" value={clientInformation.postcode} onChange={handleClientInformation} name="postcode" required className="form__input"/>
                <input type="email" placeholder="Email" value={clientInformation.email} onChange={handleClientInformation} name="email" required className="form__input"/>
                <input type="email" placeholder="Confirmar Email" value={clientInformation.email} onChange={handleClientInformation} name="email" required className="form__input"/>
                <h3 className="checkout__title">Informacion adicional</h3>
                <textarea name="" placeholder="Escriba aqui su comentario" id="" cols="30" rows="10" className="form__input textarea"></textarea>
                <button type="submit" className="btn--add btn--md">Realizar pedido</button>
            </form>
        </div>
    )
}

export default Form;