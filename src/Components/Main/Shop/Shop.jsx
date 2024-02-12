import './Shop.css';
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

const Shop = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
    })
    return (
        <div className='Shop'>
            <Nav/>
            <Routes>
                <Route path='/:category' element={<Products/>}/>
                <Route path='/' element={<Products/>}/>
            </Routes>
        </div>
    )
}

export default Shop;