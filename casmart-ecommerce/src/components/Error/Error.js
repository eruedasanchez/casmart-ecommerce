import { Link } from 'react-router-dom';
import './Error.css';


const Error = () => {
    return (
        <section className="section-error">
            <div className="error-page">
                <div className="content-error">
                    <h1 data-text="404">404</h1>
                    <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
                    <p>Lo sentimos, la página que estás buscando no existe. Si crees que algo está roto, reportanos un problema</p>
                    <div className="btns">
                        <Link to='/'><button>Volver al Home</button></Link>
                        <Link to='/'><button>Reportar problema</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;