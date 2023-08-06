import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

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

    const ID_FST_PROD = "C83CvZQTsHAFr6DqIT5Z";
    const ID_SND_PROD = "EXcploXu84d5kmfkacAo";
    const ID_TRH_PROD = "GOlo80XZLb8yNDgjsp7I";
    const ID_FTH_PROD = "MYLy5Gb7yuvZZq6h8g8M";
    const ID_FFH_PROD = "PzT9EGSrEeECzhiyeNuh";
    const ID_SXT_PROD = "fUeV2tqkEubrwDjCaO2r";
    const ID_SVH_PROD = "pDYPd3oovZX6hFm0aKoZ";
    const ID_OCT_PROD = "ssBEG4g1nqKqgyVum9TR";

    if(!(id === ID_FST_PROD || id === ID_SND_PROD || id === ID_TRH_PROD || id === ID_FTH_PROD || id === ID_FFH_PROD || id === ID_SXT_PROD || id === ID_SVH_PROD || id === ID_OCT_PROD)){
        return <Error/>
    }
    
    return (
        <>
            <NavBar/>
            <div className='contaner-item'>
                {item ? <ItemDetail item={item}/> : <Spinner/>}
            </div>
            <Footer/>
        </>
    )
}

export default ItemDetailContainer;