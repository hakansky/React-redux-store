import './ShoppingCart.css';
import {useDispatch, useSelector} from "react-redux";
import ProductInCart from "./ProductInCart/ProductInCart";
import {clearCart} from "../../../Redux/reducers/shoppingCartReducer";

const ShoppingCart = () => {
    let productsInCart = useSelector((state) => state.shoppingCart.productsInCart);

    return (
        <div className='ShoppingCart'>
            <div className='ProductsInCartMapping'>
                {
                    productsInCart.map(productInCart => <ProductInCart productInCart={productInCart} key={productInCart.id}/>)
                }
            </div>
            <div className='InputsToOrder'>
                <h1 id='TotalPrice'>Total Price: {productsInCart.reduce((acc, productInCart) => acc + (productInCart.price * productInCart.counter), 0).toFixed(2)} $</h1>
                <h1>Placing an order</h1>
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Surname'/>
                    <input type="number" placeholder='Phone'/>
                    <input type="email" placeholder='E-mail'/>
                    <input type="submit" value='Order' id='OrderButton'/>
                </form>
            </div>
        </div>
    )
}

export default ShoppingCart;