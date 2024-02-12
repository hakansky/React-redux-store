import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Main/Shop/Shop";
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/Main/MainPage/MainPage";
import ProductInfo from "./Components/Main/Shop/ProductInfo/ProductInfo";
import ShoppingCart from "./Components/Main/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/shop/*' element={<Shop/>}/>
        <Route path='/*' element={<MainPage/>}/>
        <Route path='/products/:productId' element={<ProductInfo/>}></Route>
        <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
