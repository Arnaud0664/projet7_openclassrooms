import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import styles from '../style/modules_css/Header.module.css';

function Header() {
    return (
        <header className= {styles.header}>
            <img src={logo} alt= "logo Kasa" className= {styles.header_logo} />
            <nav className= {styles.header_nav}>
				<Link to="/" className="header_nav_link-home">
					Accueil
				</Link>
				<Link to="/about" className="header_nav_link-about">
					A Propos
				</Link>
		    </nav>
        </header>
    )


}

export default Header;