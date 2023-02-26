//import styles from '../style/modules_css/Banner.module.css';
import fullStar from '../assets/etoilePleine.png';
import emptyStar from '../assets/etoileVide.png';

function Rating(score) {
    const range = [1,2,3,4,5];
    return (
        <div >
            {range.map((rangeValue) =>
                score >= rangeValue ? ( // affiche une étoile pleine pour chaque point de notation
					<img
						key={rangeValue.toString()}
						className="star"
						src={fullStar}
						alt="rating full star"
					/>
				) : (  // sinon affiche une étoile vide
					<img
						key={rangeValue.toString()}
						className="star"
						src={emptyStar}
						alt="rating empty star"
					/>
				)
            )}

        </div>
    )
}

export default Rating