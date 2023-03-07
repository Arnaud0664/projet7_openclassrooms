import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import styles from '../style/modules_css/Header.module.css';

function Header() {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	
		



    return (
        <header className= {styles.header}>
            <img src={logo} alt= "logo Kasa" />
            <nav className= {styles.header_nav}>
			
				<Link to="/" className={splitLocation[1] === "" ? styles.currentStyle : styles.a}>
					Accueil
				</Link>
				<Link to="/about" className={splitLocation[1] === "about" ? styles.currentStyle : styles.a}>
					A Propos
				</Link>
		    </nav>
        </header>
    )
}

export default Header;