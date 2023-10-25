import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Components/Context/CartContext';
import Cart from "./Components/Cart/Cart"
import Checkout from './Components/Checkout/Checkout';



function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <div className="container">
 <div className='row'>

 

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2> Error 404 </h2>} />
          </Routes>

</div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
