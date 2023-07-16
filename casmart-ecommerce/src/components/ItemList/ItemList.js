import { useState } from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = () => {
    const [product, setProduct] = useState([
        {"id": 1, "name": "Fit Twill Shirt for Woman", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/XY2h3MwH/product-01.jpg", "stock":15, "price":12000, "category":"best"},
        {"id": 2, "name": "Women's Faux-Trim Shirt", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/13RTLRNV/product-02.jpg", "stock":15, "price":10000, "category":"hot"},
        {"id": 3, "name": "Soft Touch Interlock", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/XJ5Dwptm/product-03.jpg", "stock":15, "price":30000, "category":"trendy"},
        {"id": 4, "name": "Grand Atlantic Chukka", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/GtJ756Lj/product-04.jpg", "stock":15, "price":18500, "category":"new"},
        {"id": 5, "name": "Cotton Shirt for Women", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/jdc3QVkx/product-05.jpg", "stock":15, "price":22000, "category":"best"},
        {"id": 6, "name": "Casmart Smart Shirt", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/Gmp7XMZk/product-06.jpg", "stock":15, "price":17600, "category":"hot"},
        {"id": 7, "name": "Ribbed Cotton Bodysuits", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/R06PBWCh/product-07.jpg", "stock":15, "price":28000, "category":"trendy"},
        {"id": 8, "name": "Double-breasted Blazer", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam, mollitia in labore", "img":"https://i.postimg.cc/CK3cLwdN/product-08.jpg", "stock":15, "price":60000, "category":"new"}
    ])
    
    return (
        <ul className="product-list">
            {product.map((prod) => {
                return (
                    <Item
                    key = {prod.id}
                    name = {prod.name}
                    img = {prod.img}
                    price = {prod.price}
                    />
                )
            })}
        </ul>
    )
}

export default ItemList;


