import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartStatus = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartStatus);
    
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
        return subtotal() * 0.05;
    }
    
    const total = () => {
        return subtotal() + shipping();
    }
    
    const cleanCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    return (
        <CartContext.Provider value={{cart, addToCart, productsInCart, subtotal, shipping, total, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}