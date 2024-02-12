import './MainPage.css';
import Intro from "./MainPageComponents/Intro/Intro";
import LatestOffers from "./MainPageComponents/LatestOffers/LatestOffers";
import WhyOurShop from "./MainPageComponents/WhyOurShop/WhyOurShop";
import AboutUs from "./MainPageComponents/AboutUs/AboutUs";

const MainPage = () => {

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='MainPage'>
            <Intro/>
            <LatestOffers/>
            <WhyOurShop/>
            <AboutUs/>
            <p className='ScrollToTop' onClick={ScrollToTop}>⬆</p>
        </div>
    )
}

export default MainPage;