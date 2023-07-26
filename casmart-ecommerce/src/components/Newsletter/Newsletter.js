import "./Newsletter.css";

const Newsletter = () => {
    return (
        <section className="section newsletter">
            <div className="container">
                <div className="newsletter-card">
                    <h2 className="card-title">Subscribe Newsletter</h2>
                    <p className="card-text">Enter your email below to be the first to know about new collections and product launches.</p>
                    <form action="" className="card-form">
                        <div className="input-wrapper">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email" placeholder="Enter your email" required className="input-field"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            <span>Subscribe</span>
                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;