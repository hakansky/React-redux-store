import './Products.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { setProducts } from "../../../../Redux/reducers/shopReducer";
import Product from "./Product/Product";
import SortDropDown from "./SortDropDown/SortDropDown";
import Preloader from "../../Preloader/Preloader";

const Products = () => {
    const [sortedData, setSortedData] = useState([]);
    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch();
    const { category } = useParams();
    let [loading, setLoading] = useState(true);
    const [categoryLoading, setCategoryLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = () => {
                setCategoryLoading(true);
                axios.get(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`)
                    .then(response => dispatch(setProducts(response.data)))
                    .then(() => setLoading(false))
                    .then(() => setCategoryLoading(false));
        };

        fetchProducts();
    }, [category, dispatch]);

    useEffect(() => {
        setSortedData(products);
    }, [products]);

    const options = [
        { value: 'name', label: 'By name' },
        { value: 'low-price', label: 'From cheap to expensive' },
        { value: 'high-price', label: 'From expensive to cheap' },
    ];

    const SortHandler = (selectedValue) => {
        switch (selectedValue) {
            case 'name':
                sortBy('title');
                break;
            case 'low-price':
                sortBy('price', 'asc');
                break;
            case 'high-price':
                sortBy('price', 'desc');
                break;
            default:
                break;
        }
    };

    const sortBy = (key, order = 'asc') => {
        const sorted = [...products].sort((a, b) => {
            if (order === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
        setSortedData(sorted);
    };

    return (
        loading || categoryLoading ? <div id='preloader'><Preloader/></div> :
        <div className='Products'>
            <div className='sort-products'>
                <SortDropDown options={options} defaultOption="name" SortChange={SortHandler}/>
            </div>
            <div className='mapped-products'>
                {
                    sortedData.map(product => <Product product={product} key={product.id}/>)
                }
            </div>
        </div>
    )
}

export default Products;
