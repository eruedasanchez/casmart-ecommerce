import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        const queryFilter = category ? query(queryCollection, where("category", "==", category)) : queryCollection;
        
        getDocs(queryFilter)
            .then((res) => {
                setProducts(res.docs.map((prod) => {return {id: prod.id, ...prod.data()}}))
            })
    }, [category])
    
    return (
        <>
            <NavBar/>
            <section className="section product">
                <div className="container">
                    <ul className="product-list">
                        {products.length > 0 ? <ItemList products={products}/> : <Spinner/>}
                    </ul>
                    <Link to='/category/'>
                        <button className="btn btn-outline">Ver todos los productos</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default ItemListContainer;


