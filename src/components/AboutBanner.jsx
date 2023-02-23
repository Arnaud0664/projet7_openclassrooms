import styles from '../style/modules_css/AboutBanner.module.css';
import aboutImg from '../assets/img2.png';

function AboutBanner() {
    return (
        <div className= {styles.aboutBanner}>
            <img src= {aboutImg} alt= 'paysage de montagne' className= {styles.aboutImg} />
        </div>
    )
}

export default AboutBanner;