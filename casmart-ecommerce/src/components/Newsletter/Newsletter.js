import "./Newsletter.css";

const Newsletter = () => {
    return (
        <section className="section newsletter">
            <div className="container">
                <div className="newsletter-card">
                    <h2 className="card-title">Suscribite a nuestro Newsletter</h2>
                    <p className="card-text">Ingresa tu correo electrónico para ser el primero en conocer las nuevas colecciones y lanzamientos de productos.</p>
                    <form action="" className="card-form">
                        <div className="input-wrapper">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email" placeholder="Ingresa tu email" required className="input-field"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            <span>Suscribite</span>
                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;