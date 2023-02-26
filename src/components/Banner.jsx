import styles from '../style/modules_css/Banner.module.css';
import banner_img from '../assets/img1.png';

function Banner() {
    return (
        <div className= {styles.banner}>
            <img src= {banner_img} alt= "paysage de falaises" className= {styles.banner_img} />
            <h1 className= {styles.h1Banner}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner