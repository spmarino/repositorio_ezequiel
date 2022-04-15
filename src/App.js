import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./itemListContainer";
import ItemDetailContainer from "./itemDetailContainer";
import Navbar from "./Navbar";
import { createContext } from "react";
import CartContextProvider from "./CartContext";
import Cart from "./Cart";
import "./App.css"
import Header from "./Header";



export const AppContext = createContext();

function App() {
  return (
    <CartContextProvider>   
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
