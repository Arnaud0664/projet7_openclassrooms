import { useState, useRef } from "react"; //import des hooks de base react
import Chevron from "../assets/flecheBas.png";
import styles from "../style/modules_css/Collapse.module.css";

function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false); // état ouvert ou fermé
    const collapseRef = useRef(); // 

    return (
        <div className= {styles.collapse}>
            <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
                <h3 className= {styles.h3}>{props.aboutTitle}{props.productTitle}</h3>
                <img
					className={isOpen ? styles.rotation : styles.chevron}
					src={Chevron}
					alt="chevron"
				/>
            </button>
            <div
                className= {styles.content_block}
                ref={collapseRef}
                // si ouvert : hauteur définit par la propriété current de collapseRef = scrollHeight (mesure de la hauteur de l'élément)
                style={
                    isOpen ? {
                        height: collapseRef.current.scrollHeight + "px"
                    }
                    : {
                        height: "0px"
                    }
                }
            >
                <div className= {styles.content}>
                    <p className= {styles.collapse_text}>{props.aboutText}{props.description}{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Collapse;
