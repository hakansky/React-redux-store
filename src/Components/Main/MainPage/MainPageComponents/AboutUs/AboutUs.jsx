import './AboutUs.css';
import img from '../../../../../assets/img/about-us.png'
import {useState} from "react";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ShowMoreHandler = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className='AboutUs' id='about-us'>
            <h1>About us</h1>
            <div className='about-us'>
                <img src={img} alt="img"/>
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.</p>

                    {
                        isVisible ? <p className='p-hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.</p> : <button onClick={ShowMoreHandler}>Show more..</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs;