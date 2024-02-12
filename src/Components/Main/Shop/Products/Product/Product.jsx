import './Product.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../../../../Redux/reducers/shoppingCartReducer";

const Product = ({product}) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const ShowMoreHandler = () => {
        navigate(`/products/${product.id}`)
    }

    const AddProductToCartHandler = () => {
        dispatch(addProductToCart(product))
    }


    return (
        <div className='Product'>
            <div>
                <img src={product.image} alt={product.title}/>
            </div>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <button onClick={ShowMoreHandler}>Show more...</button>
            <button onClick={AddProductToCartHandler}>Add to Cart</button>
        </div>
    )
}

export default Product;