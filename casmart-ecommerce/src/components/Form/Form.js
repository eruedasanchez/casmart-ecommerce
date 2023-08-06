import './Form.css';

const Form = ({clientInformation, errors, handleSubmit, handleClientInformation}) => {
    return (
        <div className="checkout__group">
            <h3 className="section__title">Detalles de Facturacion</h3>
            <form action="" className="form grid" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={clientInformation.name} onChange={handleClientInformation} name="name" required className="form__input"/>
                {errors.name && <p className='alert'>{errors.name}</p>}
                <input type="text" placeholder="Apellido" value={clientInformation.surname} onChange={handleClientInformation} name="surname" required className="form__input"/>
                {errors.surname && <p className='alert'>{errors.surname}</p>}
                <input type="text" placeholder="Ciudad" value={clientInformation.city} onChange={handleClientInformation} name="city" required className="form__input"/>
                {errors.city && <p className='alert'>{errors.city}</p>}
                <input type="text" placeholder="Pais" value={clientInformation.country} onChange={handleClientInformation} name="country" required className="form__input"/>
                {errors.country && <p className='alert'>{errors.country}</p>}
                <input type="number" placeholder="Telefono" value={clientInformation.phone} onChange={handleClientInformation} name="phone" required className="form__input"/>
                {errors.phone && <p className='alert'>{errors.phone}</p>}
                <input type="email" placeholder="Email" value={clientInformation.email} onChange={handleClientInformation} name="email" required className="form__input"/>
                {errors.email && <p className='alert'>{errors.email}</p>}
                <input type="email" placeholder="Confirmar Email" value={clientInformation.email} onChange={handleClientInformation} name="email" className="form__input"/>
                {errors.email && <p className='alert'>{errors.email}</p>}
                <h3 className="checkout__title">Informacion adicional</h3>
                <textarea placeholder="Escriba aqui su comentario (Maximo de 300 caracteres)" cols="30" rows="10" value={clientInformation.comment} onChange={handleClientInformation} name="comment" className="form__input textarea"></textarea>
                {errors.comment && <p className='alert'>{errors.comment}</p>}
                <button type="submit" className="btn--add btn--md w-comfirm">Realizar pedido</button>
            </form>
        </div>
    )
}

export default Form;



















