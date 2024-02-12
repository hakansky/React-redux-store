import './Header.css';
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/img/logo.png';
import cart from '../../assets/img/cart.png'
import products from "../Main/Shop/Products/Products";
import shoppingCart from "../Main/ShoppingCart/ShoppingCart";
import {selectCartLength} from "../../Redux/reducers/shoppingCartReducer";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import Preloader from "../Main/Preloader/Preloader";

const Header = () => {
    const cartLength = useSelector(selectCartLength);
    let navigate = useNavigate();

    const scrollToAboutUs = () => {
        const aboutUsElement = document.getElementById('about-us');
            aboutUsElement.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContacts = () => {
        const contactsElement = document.getElementById('contacts');
            contactsElement.scrollIntoView({ behavior: 'smooth' });
    };

    const NavigateToShoppingCart = () => {
        navigate('/shoppingCart')
    }

    useEffect(() => {
        if (cartLength > 0) {

        }
    })

    return (
        <div className='Header'>
            <img src={logo} alt="img"/>
            <div className='NavLinks'>
                <Link to='/'>Main</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/#about-us' onClick={scrollToAboutUs}>About us</Link>
                <Link to='/#contacts' onClick={scrollToContacts}>Contacts</Link>
            </div>
            <img src={cart} onClick={NavigateToShoppingCart} alt="img" id='cart'/>
            {
                cartLength > 0 ? <h2 id='shopping-cart-quantity'>{cartLength}</h2> : <></>
            }
        </div>
    )
}

export default Header;