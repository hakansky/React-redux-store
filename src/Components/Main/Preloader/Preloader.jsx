import './Preloader.css';
import preloader from '../../../assets/img/Preloader.svg'

const Preloader = () => {
    return (
        <div className='Preloader'>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;