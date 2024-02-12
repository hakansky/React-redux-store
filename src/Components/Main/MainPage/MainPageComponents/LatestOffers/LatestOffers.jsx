import './LatestOffers.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {setLatestOffers} from "../../../../../Redux/reducers/latestOffersReducer";
import LatestOfferCard from "./LatestOfferCard/LatestOfferCard";
import {useNavigate} from "react-router-dom";

const LatestOffers = () => {
    let latestOffers = useSelector(state => state.latestOffers.latestOffersState);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(response => {
                dispatch(setLatestOffers(response.data))
            })
    })

    const NavigateToShop = () => {
        navigate('/shop')
    }

    return (
        <div className='LatestOffers'>
            <h1>Latest <span>offers</span></h1>
            <div className='Offers'>
                {
                    latestOffers.map((offer, index) => {
                        if ((index + 1) % 4 === 0) {
                            return <LatestOfferCard offer={offer} key={offer.id} />;
                        }
                        return null
                    })
                }
            </div>
            <button onClick={NavigateToShop}>Show all</button>
        </div>
    )
}

export default LatestOffers;