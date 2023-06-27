import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/addToCart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
