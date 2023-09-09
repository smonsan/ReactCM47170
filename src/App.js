import NavBar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';









function App() {


  return (
    <BrowserRouter>
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'} />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
