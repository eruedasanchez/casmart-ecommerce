import {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

const cartStatus = JSON.parse(localStorage.getItem("cart")) || [];

const wishlistStatus = JSON.parse(localStorage.getItem("wishlist")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(cartStatus);

    const [wishlist, setWishlist] = useState(wishlistStatus);

    const [count, setCount] = useState(1);
    
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
        setCount(1);
    }

    const addToWishlist = (item) => {
        const newWishlist = [...wishlist];
        const wasAddedProduct = newWishlist.find((prod) => prod.id === item.id);
        
        if(wasAddedProduct){
            wasAddedProduct.likes = wasAddedProduct.likes + 1;
        } else {
            newWishlist.push(item);
        }
        setWishlist(newWishlist);
    }
    
    const deleteItem = (id) => {
        const idProductDelete = cart.find((prod) => prod.id === id);
        const newCart = cart.filter((item) => { return item !== idProductDelete});
        setCart(newCart);
    }

    const deleteItemFromWishlist = (id) => {
        const idProductDelete = wishlist.find((prod) => prod.id === id);
        const newWishlist = wishlist.filter((item) => { return item !== idProductDelete});
        setWishlist(newWishlist);
    }
    
    const productsInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    const productsInWishlist = () => {
        return wishlist.reduce((acc, prod) => acc + parseInt(prod.likes) , 0);
    }
    
    const subtotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
    }
    
    const shipping = () => {
        return subtotal() * 0.005;
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

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])
    
    return (
        <CartContext.Provider value={{cart, setCart, wishlist, setWishlist, count, setCount, addToCart, addToWishlist, productsInCart, productsInWishlist, subtotal, shipping, total, cleanCart, deleteItem, deleteItemFromWishlist}}>
            {children}
        </CartContext.Provider>
    )
}

