import {dataProvider} from "../Functions/dataProvider";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().title;
    
    useEffect(() => {
        dataProvider()
        .then((res) => {
            if(category){
                setProducts(res.filter((prod) => prod.category === category));
            } else {
                setProducts(res);
            }
        })
    }, [category])
    
    return (
        <section className="section product">
            <div className="container">
                <ul className="product-list">
                    <ItemList products={products}/>
                </ul>
                <Link to='/category/'>
                    <button className="btn btn-outline">View All Products</button>
                </Link>
            </div>
        </section>
    );
}

export default ItemListContainer;


