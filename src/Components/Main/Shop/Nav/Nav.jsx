import './Nav.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className='Nav'>
            <h3>Categories:</h3>
            <Link to=''>All</Link>
            <Link to="men's clothing" className='LinksNav'>Men's clothing</Link>
            <Link to="women's clothing" className='LinksNav'>Women's clothing</Link>
            <Link to='electronics' className='LinksNav'>Electronics</Link>
            <Link to='jewelery' className='LinksNav'>Jewelery</Link>
        </div>
    )
}

export default Nav;