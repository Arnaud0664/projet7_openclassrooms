import logo from '../assets/logo_footer.png';
import styles from '../style/modules_css/Footer.module.css';

function Footer() {
    return (
        <div className= {styles.footer}>
            <img src={logo} alt= "logo Kasa" className= {styles.footer_logo} />
            <p className= {styles.footer_text}>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;