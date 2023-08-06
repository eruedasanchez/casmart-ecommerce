import { Link } from 'react-router-dom';
import './Congrats.css';

const Congrats = ({clientInformation, orderId}) => {
    return (
        <section className="section-congrats">
            <div className="congrats-page">
                <div className="content-congrats">
                    <h1 data-text="Felicitaciones!">Felicitaciones!</h1>
                    <h4 data-text="Su compra ha sido procesada.">Su compra ha sido procesada</h4>
                    <p>{clientInformation.name} {clientInformation.surname}, en breve recibira en su correo {clientInformation.email}</p>
                    <p>un mail con el detalle de su pedido e informandole los siguientes pasos para recibir su compra.</p>
                    <p>Le recordamos que su numero de seguimiento es {orderId}</p>
                    <p>Muchas gracias por confiar en nosotros.</p>
                    <div className="btns">
                        <Link to='/'><button>Volver al Home</button></Link>
                        <Link to='/category'><button>Continuar comprando</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Congrats;