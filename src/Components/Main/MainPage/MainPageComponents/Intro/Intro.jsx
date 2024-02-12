import './Intro.css';
import {useNavigate} from "react-router-dom";

const Intro = () => {
    let navigate = useNavigate();

    const NavigateToShop = () => {
        navigate('/shop')
    }

    return (
        <div className='Intro'>
            <h1>React online store</h1>
            <h3>Discover brands and their stories</h3>
            <h2 onClick={NavigateToShop}>Shop now</h2>
        </div>
    )
}

export default Intro;