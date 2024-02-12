import './Rating.css';

const Rating = ({value}) => {
    const ratingValue = Math.round(value);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < ratingValue) {
            stars.push(<span id='full-star' key={i}>&#9733;</span>);
        } else {
            stars.push(<span key={i}>&#9734;</span>);
        }
    }

    return <div>{stars}</div>;
};

const ProductRating = ({value}) => {
    return (
        <div className='Rating'>
            <p id='rating'>Rating:</p>
            <Rating value={value}/>
        </div>
    );
};

export default ProductRating;
