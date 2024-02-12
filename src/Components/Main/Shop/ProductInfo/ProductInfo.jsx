import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {setProduct} from "../../../../Redux/reducers/productInfoReducer";
import './ProductInfo.css'
import Reviews from "./Reviews/Reviews";
import {addProductToCart} from "../../../../Redux/reducers/shoppingCartReducer";
import Preloader from "../../Preloader/Preloader";
import ProductRating from "./Rating/Rating";

const ProductInfo = () => {
    let {productId} = useParams();
    let dispatch = useDispatch();
    let product = useSelector(state => state.productInfo.product)
    let navigate = useNavigate();
    let [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => dispatch(setProduct(response.data)))
            .then(() => setLoading(false))
    }, [productId])

    const GoBackHandler = () => {
        navigate('/shop')
    }

    const AddProductToCartHandler = () => {
        dispatch(addProductToCart(product))
    }

    return (
        loading ? <Preloader/> :
        <div className='ProductInfo'>
            <div className='image-button'>
                <img src={product.image} alt={product.title}/>
                <button onClick={GoBackHandler}>Go back</button>
            </div>
            <div className='description'>
                <h2>{product.title}</h2>
                <h3>Price: {product.price} $</h3>
                <p>{product.description}</p>
                <ProductRating value={product.rating.rate}/>
                <button onClick={AddProductToCartHandler}>Add to cart</button>
                <Reviews/>
            </div>
        </div>
    )
}

export default ProductInfo;