import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import './Media.css';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;




