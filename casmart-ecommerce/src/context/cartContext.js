import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item, count) => {
        const itemAdded = {...item, count};
    
        const newCart = [...cart];
        const wasAddedProduct = newCart.find((prod) => prod.id === itemAdded.id);
        
        if(wasAddedProduct){
            wasAddedProduct.count += count;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart);
    }
    
    const productsInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }
    
    const subtotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
    }
    
    const shipping = () => {
        return subtotal() * 0.10;
    }
    
    const total = () => {
        return subtotal() + shipping();
    }
    
    const cleanCart = () => {
        setCart([]);
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, productsInCart, subtotal, shipping, total, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}