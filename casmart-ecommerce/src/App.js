import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import './Media.css';
import {CartProvider} from './context/cartContext';
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/category' element={<ItemListContainer/>}/>
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/wishlist' element={<Wishlist/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

