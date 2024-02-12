import './ProductInCart.css';
import {useDispatch} from "react-redux";
import {
    DecrementCounter,
    IncrementCounter,
    removeProductFromCart,
} from "../../../../Redux/reducers/shoppingCartReducer";

const ProductInCart = ({productInCart}) => {
    let dispatch = useDispatch();

    let RemoveHandler = () => {
        dispatch(removeProductFromCart(productInCart))
    }

    let IncrementHandler = () => {
        dispatch(IncrementCounter(productInCart))
    }

    let DecrementHandler = () => {
        dispatch(DecrementCounter(productInCart))
    }

    return (
        <div className='ProductInCart'>
            <img src={productInCart.image} alt={productInCart.title}/>
            <div>
                <h2>{productInCart.title}</h2>
                <div className='PriceCounterRemove'>
                    <p>Price: {(productInCart.price * productInCart.counter).toFixed(2)} $</p>
                    <div className='CountRemove'>
                        <div className='Quantity'>
                            <h3>Quantity: {productInCart.counter}</h3>
                            <div className='IncrementDecrement'>
                                <p onClick={IncrementHandler}>+</p>
                                <p onClick={DecrementHandler}>-</p>
                            </div>
                        </div>
                        <button onClick={RemoveHandler}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInCart;