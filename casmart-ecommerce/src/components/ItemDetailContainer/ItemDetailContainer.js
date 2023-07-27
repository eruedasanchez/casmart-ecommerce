import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {requestItemById} from '../Functions/dataProvider';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc) 
            .then((res) => {
                setItem({id: res.id, ...res.data()});
            })
    }, [id])
    
    return (
        <>
        {item ? <ItemDetail item={item}/> : <h1>Cargando...</h1>}
        </>
    )
}

export default ItemDetailContainer;