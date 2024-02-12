import './LatestOfferCard.css';

const LatestOfferCard = ({offer}) => {
    return (
        <div className='LatestOfferCard'>
            <div className='OfferImage'>
                <img src={offer.image} alt={offer.title}/>
            </div>
            <h2>{offer.title}</h2>
            <h1>{offer.price}$</h1>
        </div>
    )
}

export default LatestOfferCard;