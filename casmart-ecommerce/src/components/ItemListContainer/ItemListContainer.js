import background from './hero-banner.jpg';
import './ItemListContainer.css';

const ItemListContainer = (greeting) => {
    return (
        <div className="hero" id="home" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">{greeting.title}</p>
                    <h2 className="h1 hero-title">{greeting.subtitle}</h2>
                    <button className="btn btn-primary">{greeting.button}</button>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;


