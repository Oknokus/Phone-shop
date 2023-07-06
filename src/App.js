import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Phone from "./pages/Catalog/Phone/Phone";
import Videophones from "./pages/Catalog/Videophones/Videophones";
import Dect from "./pages/Catalog/Dect/Dect";
import Speakerphones from "./pages/Catalog/Speakerphones/Speakerphones";
import Product from "./pages/Product";
import ProductsAll from "./pages/ProductsAll/ProductsAll";

import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

const App = () => {  
  return ( 
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/phone" element={<Phone/>}/>
          <Route path="/videophones" element={<Videophones/>}/>     
          <Route path="/dect" element={<Dect/>}/>
          <Route path="/speakerphones" element={<Speakerphones/>}/> 
          <Route path="/*" element={<NotFound/>}/> 
          <Route path="/product/:id" element={<Product/>}/>  
          <Route path="/productsAll" element={<ProductsAll/>}/>
          
          {/* <Route path="/Cards" element={<Cards/>}/>
                   
          <Route path="*" element={<NotFound/>}/>   */} 
          {/* <Route path="/favorites" element={<Favorites/>}/>  */}

        </Route>
      </Routes>
    </div> 
  )
}

export default App;