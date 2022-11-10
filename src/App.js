import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./components/context/cardContext";
import ItemDetailContainer from "./components/ItemDetailConteiner/itemDetailConteiner";
import CartView from "./components/CartView/CartView";
import Footer from './components/Footer/Footer';





function App() {
  return (
    <BrowserRouter>
     <MyProvider>
        <NavBar />
        
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:cat" element={<ItemListContainer />} />
        <Route path="/articulo/:id" element={<ItemDetailContainer />} />
        <Route path="/:cat/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<CartView />} />
        </Routes>
        <Footer/>
       </MyProvider>
     
      
    </BrowserRouter>
  
  );
}

export default App;
