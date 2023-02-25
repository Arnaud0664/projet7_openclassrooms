import styles from '../style/modules_css/Card.module.css';

function Card({cover, title}) {
    return (
            <div className={styles.card}>
                <img src={cover} alt="biens immobilier" className={styles.card_img}/>
                <div className={styles.card_layer}>
                    <title className= {styles.card_title}>{title}</title>
                </div>
            </div>   
    )
}

export default Card;
