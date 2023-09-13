import NavBar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Electronic from './Components/Pages/Electronic';
import Jewelery from './Components/Pages/Jewelery';
import MensClothing from './Components/Pages/MensClothing';
import WomensClothing from './Components/Pages/WomensClothing';



function App() {


  return (

    <BrowserRouter>
      <div className="App">

        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
        {/* <ItemCount initial={1} stock={10}  onAdd={(quantity) => console.log ('cantidad agregada', quantity)}/> */}
        <ItemDetailContainer />
        <Routes>
          <Route path='Electronics' element={<Electronic />} />
          <Route path='Jewelery' element={<Jewelery />} />
          <Route path='MensClothing' element={<MensClothing />} />
          <Route path='WomensClothing' element={<WomensClothing />} />
        </Routes>




      </div>
    // </BrowserRouter>
  );
}

export default App;
