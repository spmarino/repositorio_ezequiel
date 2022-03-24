import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./itemListContainer";
import ItemDetailContainer from "./itemDetailContainer";
import Navbar from "./Navbar";



function App() {
  return (

   
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
