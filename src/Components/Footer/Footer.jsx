import './Footer.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <div className='Footer' id='contacts'>
            <img src={logo} alt="img"/>
            <div className='footer-info'>
                <h3>Info about company</h3>
                <p>About us</p>
                <p>Vacancies</p>
                <p>Delivery</p>
                <p>Guarantee</p>
            </div>
            <div className='footer-contacts'>
                <h3>Contacts</h3>
                <p>Phone: +380 505 50 50</p>
                <p><a href='https://www.instagram.com/'>Instagram: @reactshop</a></p>
                <p><a href='https://www.facebook.com'>Facebook: reactshop</a></p>
                <p><a href='https://mail.google.com/'>E-mail: reactshop@gmail.com</a></p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.448233797388!2d30.522626076143485!3d50.45137738729764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa1b91f%3A0x42d5962fe7e791c!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LvQtdC20L3QvtGB0YLQuA!5e0!3m2!1sru!2sua!4v1707411769169!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Footer;