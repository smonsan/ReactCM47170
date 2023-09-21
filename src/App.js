import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Components/Context/CartContext';
import Cart from "./Components/Cart/Cart"




function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <div className="container">
          <div className="row">
            <div className="col">
              <NavBar />

              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path="/cart" element= {<Cart/>}  />
                <Route path='*' element={<h2> Error 404 </h2>} />
              </Routes>
            </div>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
