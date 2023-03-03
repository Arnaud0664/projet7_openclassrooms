import {useState} from "react";
import styles from '../style/modules_css/Gallery.module.css';
import leftArrow from '../assets/slideG.png';
import rightArrow from '../assets/slideD.png';

function Gallery(props) {
    const pictures = props.pictures;
    const length = pictures.length;

    const [currentIndex,setCurrentIndex] = useState(0);
    const goToNext = () => {
        const isLastSlide = currentIndex === length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    
    return (
        <div className= {styles.slideBlock}>
            {length > 1 && (
                <img 
                    src= {leftArrow} 
                    alt= "flèche gauche" 
                    className= {styles.leftArrow}
                    onClick= {goToPrevious} 
                />
            )}
            {length > 1 && (
                <img 
                    src= {rightArrow} 
                    alt= "flèche droite" 
                    className= {styles.rightArrow} 
                    onClick= {goToNext} 
                />
            )}
            {pictures.map((picture, index) => (
                <div key= {index} className= {styles.slider}>
                    {index === currentIndex &&
                        <img 
                            src= {picture} 
                            alt= "pièce d'un logement'" 
                            className= {styles.pictures} 
                        />
                    }
                    {index === currentIndex && length >1 && (
						<span className= {styles.slider_number}>
							{currentIndex + 1}/{length}
						</span>
					)}
                </div>
            ))}
        </div>
    )
}

export default Gallery