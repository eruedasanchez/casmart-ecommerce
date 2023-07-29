import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({products}) => {
    
    return (
        products.map(prod => <Item key = {prod.id} product = {prod}/>)
    )

    
}

export default ItemList;