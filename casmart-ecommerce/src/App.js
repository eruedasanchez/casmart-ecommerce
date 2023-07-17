import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
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
        <Route path='/' element={<ItemListContainer title="We are on sale" subtitle="High Moda Fashion House" button="Shop now!"/>}/>
        <Route path='/category/:title' element={<ItemListContainer title="We are on sale" subtitle="High Moda Fashion House" button="Shop now!"/>}/>
        <Route path='/item/:name' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




