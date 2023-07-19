import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {requestItemById} from '../Functions/dataProvider';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    
    useEffect(() => {
        requestItemById(parseInt(id))
        .then((res) => {
            setItem(res);
        })
    }, [id])
    
    return (
        <>
        {item && <ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailContainer;