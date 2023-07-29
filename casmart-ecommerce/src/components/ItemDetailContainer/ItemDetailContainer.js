import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

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
        <div className='contaner-item'>
        {item ? <ItemDetail item={item}/> : <Spinner/>}
        </div>
    )
}

export default ItemDetailContainer;