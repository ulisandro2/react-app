import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar  from './Componets/Navbar';
import ItemCount from './Componets/ItemCount'
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Cart from './Componets/Cart';
import CartContextProvider from './Componets/CartContext';





function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
