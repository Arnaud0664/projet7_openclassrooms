import styles from '../style/modules_css/Rating.module.css'; 
import fullStar from '../assets/pleine.svg';
import emptyStar from '../assets/vide.svg';

function Rating(props) {
    const score = props.score;
    const range = [1,2,3,4,5];
    return (
        <div >
            {range.map((rangeValue) =>
                score >= rangeValue ? ( // convertit la notation en étoiles pleines
					<img
						key={rangeValue.toString()}
						className= {styles.star}
						src={fullStar}
						alt="rating full star"
					/>
				) : (  // sinon affiche une étoile vide
					<img
						key={rangeValue.toString()}
						className= {styles.star}
						src={emptyStar}
						alt="rating empty star"
					/>
				)
            )}

        </div>
    )
}

export default Rating