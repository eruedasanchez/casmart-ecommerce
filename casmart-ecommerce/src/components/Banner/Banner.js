import { Link } from 'react-router-dom';
import './Banner.css';
import background from './hero-banner.jpg';

const Banner = (greeting) => {
    return (
        <div className="hero" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">{greeting.title}</p>
                    <h2 className="h1 hero-title">{greeting.subtitle}</h2>
                    <Link to='/category/'>
                        <button className="btn btn-primary">{greeting.button}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;