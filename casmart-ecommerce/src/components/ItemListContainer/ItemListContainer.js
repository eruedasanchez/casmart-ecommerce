import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import Error from "../Error/Error";

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

    // if(!(category === "best-seller" || category === "hot-collection" || category === "trendy" || category === "new-arrival")){
    //     return(
    //         <Error/>
    //     )
    // }

    

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


