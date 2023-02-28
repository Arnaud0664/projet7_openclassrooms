import { useState, useRef } from "react"; //import des hooks de base react
import Chevron from "../assets/flecheBas.png";
import styles from "../style/modules_css/Collapse.module.css";

function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false); //useRef = equivalent de "this" en js
    const collapseRef = useRef(); //get infos of the opened Collapse

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
                // conditionnal height: if opened then actual height as defined by parent.ref DOM element, 
                // 0px otherwise - note that in REACt style is an Objet
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
