import NavBar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {


  return (
    // <BrowserRouter>
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'} />
      {/* <ItemCount initial={1} stock={10}  onAdd={(quantity) => console.log ('cantidad agregada', quantity)}/> */}
      <ItemDetailContainer/>
      
    </div>
    // </BrowserRouter>
  );
}

export default App;
