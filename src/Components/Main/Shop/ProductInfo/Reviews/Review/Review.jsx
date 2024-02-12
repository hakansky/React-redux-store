import './Review.css';

const Review = ({review}) => {
    let changeImgClassHandler = (e) => {
        e.currentTarget.classList.toggle('active');
    }


    return (
        <div className='Review'>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <h5>Date: {review.date}</h5>
        </div>
    )
}

export default Review;