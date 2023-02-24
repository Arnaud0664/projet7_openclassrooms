import {Link} from "react-router-dom";
import styles from "../style/modules_css/Error.module.css";


function Error() {
    return (
        
        <>
            <div className= {styles.error}>
                <p className={styles.error_number}>404</p>
                <p className={styles.error_text}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">
				    Retourner sur la page d’accueil
			    </Link>
            </div>
        </>
    )
}



export default Error