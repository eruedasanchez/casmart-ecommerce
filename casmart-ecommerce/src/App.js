import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import './Media.css';
import { CartContext } from './context/cartContext';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/category/' element={<ItemListContainer/>}/>
          <Route path='/category/:title' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}

export default App;





