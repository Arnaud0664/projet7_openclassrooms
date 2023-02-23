import styles from '../style/modules_css/Banner.module.css';
import img_banner from '../assets/img1.png';

function Banner() {
    return (
        <div className= {styles.banner}>
            <img src= {img_banner} alt= "paysage de falaises" className= {styles.img_banner} />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;