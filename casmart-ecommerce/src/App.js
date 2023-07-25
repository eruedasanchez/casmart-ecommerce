import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import './Media.css';
import { CartContext } from './context/cartContext';


function App() {
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

  return (
    <>
    <CartContext.Provider value={{cart, addToCart, productsInCart}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/category/' element={<ItemListContainer/>}/>
          <Route path='/category/:title' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}

export default App;





